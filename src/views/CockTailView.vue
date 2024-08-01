<script setup lang="ts">
import { ref, watch } from 'vue'
import CockTail from '../components/CockTail.vue'

const keyWord = ref('')
const data = ref(null)
const selectedDrink = ref(null)
const activeElement = ref(null)

const fetchData = async (keyword: string) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`
        const res = await fetch(url)
        const resData = await res.json()
        const { drinks } = resData
        data.value = drinks
    } catch (e) {
        console.warn('Error!' + e.message)
    }
}

const search = async () => {
    await fetchData(keyWord.value)
}

const selectDrink = (drink, event) => {
    let el = event.target
    selectedDrink.value = drink

    if (el.tagName !== 'DIV') {
        let parent = el.parentElement
        if (parent.tagName !== 'DIV') {
            let grandParent = parent.parentElement
            activeElement.value = grandParent
        } else {
            activeElement.value = parent
        }
    } else {
        activeElement.value = el
    }
}

watch(
    () => activeElement.value,
    (currEl, oldEl) => {
        if (oldEl) {
            oldEl.classList.toggle('active')
        }
        currEl.classList.toggle('active')
    }
)
</script>

<template>
    <div class="row gap-3 p-4">
        <div v-if="selectedDrink" class="col rounded active">
            <CockTail :drink="selectedDrink"></CockTail>
        </div>
        <div class="col d-flex flex-column rounded" style="background-color: #6482ad">
            <form class="d-flex p-3 gap-3" @submit.prevent="onSubmit">
                <input type="text" v-model="keyWord" class="form-control input-lg" />
                <button @click="search()" class="btn btn-lg btn-success">Find</button>
            </form>

            <div
                class="rounded border my-2 p-3 cursor-pointer text-center d-flex justify-content-between"
                v-for="(drink, index) in data"
                :key="index"
                @click="($event) => selectDrink(drink, $event)"
            >
                <img
                    :src="drink.strDrinkThumb"
                    :alt="drink.strDrink"
                    class="img-thumbnail image-side rounded-circle"
                />

                <article>
                    <span class="text text-primary"> N.O: {{ index }} |</span>
                    Name: {{ drink.strDrink }} | Alcoholic:
                    {{ drink.strAlcoholic }}
                    <span v-if="drink.strAlcoholic === 'Alcoholic'">&#129326;</span>
                    <span v-else>&#128518;</span> | Glass:
                    {{ drink.strGlass }}
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-side {
    width: 100px;
    height: 100px;
}
.input-lg {
    font-size: 30px;
}

.cursor-pointer {
    background-color: #7fa1c3;
}

.cursor-pointer:hover {
    transform: scale(1.2, 1.2);
    background-color: #e2dad6;
}

.active {
    background-color: #f5eded;
}
</style>

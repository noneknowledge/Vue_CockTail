<script setup>
import { RouterView, useRouter } from 'vue-router'
import { watch, ref, reactive } from 'vue'
import CockTail from '../components/CockTail.vue'

const keyWord = ref('')
const data = ref(null)
const selectedDrink = ref(null)

const router = useRouter()
const fetchData = async () => {
    try {
        const res = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        )
        const resData = await res.json()
        const { drinks } = resData
        data.value = drinks
    } catch (e) {
        console.warn('Error!' + e.message)
    }
}

const search = async () => {
    console.log(keyWord.value)
    await fetchData()
}

const selectDrink = (drink) => {
    selectedDrink.value = drink
}
</script>

<template>
    <div class="row gap-3 p-4">
        <div class="col bg-primary">
            <CockTail v-if="selectedDrink" :drink="selectedDrink"></CockTail>
        </div>
        <div class="col d-flex flex-column">
            <form @submit.prevent="onSubmit" class="text text-center py-4">
                <input type="text" v-model="keyWord" />
                <button @click="search()">Find</button>
            </form>

            <div v-for="(drink, index) in data" :key="index" @click="selectDrink(drink)">
                Drink N.O: {{ index }} | Id {{ drink.idDrink }} Name: {{ drink.strDrink }} Category:
                {{ drink.strCategory }} | Alcoholic: {{ drink.strAlcoholic }} | Glass:
                {{ drink.strGlass }} | Images: {{ drink.strDrinkThumb }}
            </div>
        </div>
    </div>
</template>

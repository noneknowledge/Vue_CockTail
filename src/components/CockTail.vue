<script setup lang="ts">
import { ref, watchEffect } from 'vue'
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

const props = defineProps<{
    drink: any
}>()

const language = ref('English')
const ingredients = ref<any[]>([])
const measures = ref<any[]>([])

watchEffect(() => {
    ingredients.value = []
    measures.value = []
    Object.keys(props.drink)
        .filter((key) => key.includes('strIngredient') || key.includes('strMeasure'))
        .forEach(function (key) {
            let value: any = props.drink[key]
            if (value !== null) {
                if (key.includes('strIngredient')) {
                    ingredients.value.push(value)
                } else {
                    measures.value.push(value)
                }
            }
        })
})
</script>
<template>
    <h2 class="text-center font-weight-light my-2">
        <i>{{ drink.strDrink }}</i>
    </h2>
    <hr />
    <img
        :src="drink.strDrinkThumb"
        class="img-fluid rounded image mx-auto d-block my-3"
        :alt="drink.strDrink"
    />
    <div style="font-size: 20px">
        <p class="text-secondary text-center">
            Alcoholic:
            {{ drink.strAlcoholic }}
            <span v-if="drink.strAlcoholic === 'Alcoholic'">&#129326;</span>
            <span v-else>&#128518;</span> | Glass: {{ drink.strGlass }}
        </p>
        <article>
            Instruction:
            <div>Picked: {{ language }}</div>

            <input type="radio" id="English" value="English" v-model="language" />
            <label for="English">English</label>
            <input type="radio" id="Spanish" value="Spanish" v-model="language" />
            <label for="Spanish">Spanish</label>
            <input type="radio" id="Italian" value="Italian" v-model="language" />
            <label for="Italian">Italian</label>
        </article>
        <div class="row gap-5 p-3">
            <div class="col-5 py-2">
                Ingredient:
                <ul>
                    <li v-for="(ingredient, index) in ingredients" :key="index">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
            <div class="col-5 py-2" style="border-left: 1px solid">
                Measure:
                <ul>
                    <li v-for="(measure, index) in measures" :key="index">{{ measure }}</li>
                </ul>
            </div>
        </div>
    </div>
    <p>{{ drink }}</p>
</template>

<style scoped>
.image {
    width: 50vh;
    height: 50vh;
}
</style>

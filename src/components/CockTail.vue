<script setup lang="ts">
import { ref, watchEffect } from 'vue'
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

const props = defineProps<{
    drink: any
}>()

const language = ref('English')
const ingredients = ref([])
const measures = ref([])

const showInstruction = (instruction: string) => {
    if (instruction) {
        return instruction
    } else {
        return "This drink doesn't have instruction for this language yet!"
    }
}

watchEffect(() => {
    ingredients.value = []
    measures.value = []
    Object.keys(props.drink)
        .filter((key) => key.includes('strIngredient') || key.includes('strMeasure'))
        .forEach(function (key, index) {
            let value = props.drink[key]
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
            <span v-if="drink.strAlcoholic === 'Alcoholic'">&#128565;</span>
            <span v-else>&#128518;</span> | Glass: {{ drink.strGlass }}
        </p>

        <div class="py-2">
            &ensp;+ Ingredient - Measure:
            <ul>
                <li v-for="(ingredient, index) in ingredients" :key="index">
                    {{ ingredient }} <span v-if="measures[index]">- {{ measures[index] }}</span>
                </li>
            </ul>
        </div>

        - <i>Choose your language: (Instruction only) </i>
        <section class="py-3 d-flex justify-content-between">
            <input type="radio" id="English" value="English" v-model="language" />
            <label for="English">English</label>
            <input type="radio" id="Spanish" value="Spanish" v-model="language" />
            <label for="Spanish">Spanish</label>
            <input type="radio" id="Italian" value="Italian" v-model="language" />
            <label for="Italian">Italian</label>
            <input type="radio" id="German" value="German" v-model="language" />
            <label for="German">German</label>
            <input type="radio" id="France" value="France" v-model="language" />
            <label for="France">France</label>
        </section>
        <article class="py-3">
            - <i>Instruction:</i>
            <div v-show="language === 'English'">{{ showInstruction(drink.strInstructions) }}</div>
            <div v-show="language === 'Spanish'">
                {{ showInstruction(drink.strInstructionsES) }}
            </div>
            <div v-show="language === 'Italian'">
                {{ showInstruction(drink.strInstructionsIT) }}
            </div>
            <div v-show="language === 'German'">{{ showInstruction(drink.strInstructionsDE) }}</div>
            <div v-show="language === 'France'">{{ showInstruction(drink.strInstructionsFR) }}</div>
        </article>
    </div>
</template>

<style scoped>
.image {
    width: 50vh;
    height: 50vh;
}
</style>

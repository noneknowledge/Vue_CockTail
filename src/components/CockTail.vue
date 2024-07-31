<script setup lang="ts">
import { watch, ref } from 'vue'

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
const data = ref(null)
const props = defineProps<{
    drink: any
}>()
console.log(props.drink)
</script>
<template>
    <h1>Cocktail</h1>
    <p>{{ drink }}</p>
</template>

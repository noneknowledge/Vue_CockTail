<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

watch(
    () => route.params.slug,
    (newId, oldId) => {
        console.log(newId)
        console.log('Change To')
        console.log(oldId)
    }
)
console.log(route.params.slug)
</script>
<template>
    <h1>Cocktail</h1>
    <h2>{{ route.params.slug }}</h2>
</template>

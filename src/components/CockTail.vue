<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
const data = ref(null)
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchData = async (id) => {
    try {
        console.log('fetch')
        const res = await fetch(`${url}${id}`)
        const resData = await res.json()
        const { drinks } = resData
        console.log(drinks)
        data.value = drinks
        console.log('data')
        console.log(data.value)
    } catch (e) {
        console.warn('Error!' + e.message)
    }
}
await fetchData(11007)

console.log(route.params.slug)
</script>
<template>
    <h1>Cocktail</h1>
    <h2>{{ route.params.slug }}</h2>
</template>

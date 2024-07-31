<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// https://www.thecocktaildb.com/api.php
</script>

<template>
    <nav class="d-flex justify-content-around">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/new">New</RouterLink>
        <RouterLink to="/cocktail">Cocktail</RouterLink>
    </nav>
    <div class="container">
        <RouterView />
    </div>
</template>

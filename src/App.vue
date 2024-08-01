<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
// https://www.thecocktaildb.com/api.php
</script>

<template>
    <NavBar />
    <div class="container">
        <RouterView />
    </div>
</template>

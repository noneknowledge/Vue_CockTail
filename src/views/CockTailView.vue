<script setup>
import { RouterView, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const keyWord = ref('')

const router = useRouter()

const search = () => {
    console.log(keyWord.value)
    router.push('/')
}
</script>

<template>
    <div class="row gap-3">
        <div class="col bg-primary"><RouterView /></div>
        <div class="col bg-primary">
            <input type="text" v-model="keyWord" />
            <button @click="search()">Find</button>
        </div>
    </div>
</template>

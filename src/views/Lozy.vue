<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useLozyStore } from '@/stores/lozy';

const searchTitle = ref('')
const LozyStore = useLozyStore()
let timeId = null

watch(searchTitle, (newVal) => {
    clearTimeout(timeId)
    if (newVal.length > 3) {
        timeId = setTimeout(() => {
            LozyStore.resentLozy()
            LozyStore.fetchloading(newVal)
        }, 1000)
    } else {
        LozyStore.resentLozy()
    }
})
const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const docHeight = document.documentElement.offsetHeight
    if (scrollTop + windowHeight >= docHeight - 100) {
        if (!LozyStore.loading && LozyStore.hasMore && searchTitle.value.length > 3) {
            LozyStore.fetchloading(searchTitle.value)
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <h1 class="title">Поиск по фильмам</h1>
    <div class="search-input">
        <input v-model="searchTitle" />
    </div>
    <div class="movies-list">
        <div v-for="movie in LozyStore.lozy" :key="movie.id" class="movie-card">
            <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
                :alt="movie.title" />
            <div class="movie-info">
                <h3>{{ movie.title }}</h3>
                <p>Дата выхода: {{ movie.release_date }}</p>
            </div>
        </div>
    </div>

    <div v-if="LozyStore.loading" class="loading">Загрузка...</div>
    <div v-if="!LozyStore.hasMore && LozyStore.lozy.length" class="end-list">
        Больше фильмов нет.
    </div>
</template>
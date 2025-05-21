<script setup>
import { ref, watch, onMounted } from 'vue'
import Movies from '@/components/Movies.vue'
import { useMoviesStore } from '@/stores/movies'

const searchStore = useMoviesStore()
const searchMovies = ref('')

let timeoutId = null

watch(searchMovies, (newValue) => {
    clearTimeout(timeoutId)
    if (newValue.length > 3) {
        timeoutId = setTimeout(() => {
            searchStore.fetchMovie(newValue)
        }, 1000)
    }
})


</script>

<template>
    <h3> Введите название фильма </h3>
    <input class="search-input" v-model="searchMovies"  />
    <div class="movies-list">
        <Movies v-for="movie in searchStore.movies" :key="movie.id" :movie="movie"  />
    </div>
    <button  v-if="searchStore.movies?.length"
    @click="searchStore.fetchMovie" 
    :disabled="searchStore.loading || !searchStore.hasMore">
{{ searchStore.loading ? 'Загрузка..' : (searchStore.hasMore ? 'Загрузить еще' : 'Все товары загружены') }}
    </button>
</template>
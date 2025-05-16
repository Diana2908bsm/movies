<script setup>
import { ref, watch } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import Movies from '@/components/Movies.vue';

const searchStore = useMoviesStore()
const searchMovies = ref('')
let timeoutId = null

watch(searchMovies, (newValue) => {
  clearTimeout(timeoutId)
  if (newValue.length > 3) {
    timeoutId = setTimeout(() => {
      searchStore.fetchMovie(newValue)
    },1000)
  }
})

</script>

<template>
  <div class="wrapper">
    <h1 class="title">My Favorite Movies</h1>
    <input v-model="searchMovies" class="input" />
    <div v-for="movie of searchStore.movies" :key="movie.id">
      <Movies :movie="movie" />
    </div>
  </div>
</template>

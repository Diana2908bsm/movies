<script setup>
import { ref, watch } from 'vue'
import { useMoviesStore } from '@/stores/movies'

const searchStore = useMoviesStore()
const searchMovies = ref('')
let timeoutId = null

watch(searchMovies, (newValue) => {
  clearTimeout(timeoutId)
  if (newValue > 3) {
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
      <p>{{ movie.id }}</p>
    </div>
    <pre>
      {{ searchStore.movies }}
    </pre>
  </div>
</template>

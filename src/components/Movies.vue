<script setup>
import { useMoviesStore } from '@/stores/movies'
const favoriteStore = useMoviesStore()
const props = defineProps({
    movie: Object,
    default: {},
})
</script>
<template>
    <div class="movies">
        <div class="movies__box">
            <div class="movies__title">{{ movie.title }}</div>
            <div class="movies__overview">{{ movie.overview }}</div>
            <div class="movies__btn">
                <button class="btn blue" @click =" () => favoriteStore.toggleFavoriteMovies(movie)">
                    <span v-if="!movie.isWatch">Watched</span>
                    <span v-else>Unwatched</span>
                </button>
                <button class="btn red">Delete</button>
            </div>
        </div>
        <img class="movies__img" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" alt="">
    </div>
</template>
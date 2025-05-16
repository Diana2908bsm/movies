<script setup>
const props = defineProps({
    movie: Object,
    default: {}
})
</script>
<template>
    <div class="movies">
         <div class="movies__title">{{ movie.title }}</div>
         <div class="movies__overview">{{ movie.overview}}</div>
         <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" alt="">
    </div>
</template>
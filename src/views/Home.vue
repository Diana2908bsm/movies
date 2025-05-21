<script setup>
import { ref } from 'vue'
import Movies from '@/components/Movies.vue'
import Search from '@/components/Search.vue'
import { useMoviesStore } from '@/stores/movies'

const favoriteStore = useMoviesStore()
</script>
<template>
    <div class="wrapper">
    <h1 class="title">My Favorite Movies</h1>
    <div class="inner">
      <button @click="favoriteStore.FavoriteButton"
        :class="['favorite btn', favoriteStore.isActiveFavorite ? 'active' : '']">Favorive</button>
      <button @click="favoriteStore.SearchButton"
        :class="['search btn', favoriteStore.isActiveSearch ? 'active' : '']">Search</button>
    </div>
    <div class="main">
      <div class="main__favorite" v-if="favoriteStore.isActiveFavorite">
        <div class="data" v-if="favoriteStore.favorite.length > 0">
          <Movies v-for="movie in favoriteStore.favorite" :key="movie.id" :movie="movie" />
        </div>
        <div v-else class="no">
          Нет данных
        </div>
      </div>
      <div class="main__search" v-else>
        <search></search>
      </div>
    </div>
  </div>
</template>
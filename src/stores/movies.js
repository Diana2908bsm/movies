import { defineStore } from "pinia";

const api = 'https://api.themoviedb.org/3/search/movie?api_key=edec2e4b160092b90853622233ecf72c&query=';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: null
  }),

  actions: {
    async fetchMovie(title) {
      try {
        const response = await fetch(`${api}${encodeURIComponent(title)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGVjMmU0YjE2MDA5MmI5MDg1MzYyMjIzM2VjZjcyYyIsIm5iZiI6MTc0NzMxODk0Ny4xNzUsInN1YiI6IjY4MjVmOGEzMjJlY2M0M2RhZWFkYTRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hjrPUGmstVtDf9pje3f6Z9ovDTxzFBySrCYT9Ttxgy0'
          }
        })
        const data = await response.json()
        this.movies = data.results
      } catch (err) {
        console.log(err)
      }
    }
  }
});
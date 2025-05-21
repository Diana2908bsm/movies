import { defineStore } from "pinia";
const api = 'https://api.themoviedb.org/3/search/movie?api_key=edec2e4b160092b90853622233ecf72c&query=';
export const useLozyStore = defineStore('lozy', {
    state: () => ({
        lozy: [],
        loading: false,
        page: 1,
        hasMore: true
    }),
    actions: {
        async fetchloading(title) {
            try {
                this.loading = true
                const response = await fetch(`${api}${encodeURIComponent(title)}&page=${this.page}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGVjMmU0YjE2MDA5MmI5MDg1MzYyMjIzM2VjZjcyYyIsIm5iZiI6MTc0NzMxODk0Ny4xNzUsInN1YiI6IjY4MjVmOGEzMjJlY2M0M2RhZWFkYTRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hjrPUGmstVtDf9pje3f6Z9ovDTxzFBySrCYT9Ttxgy0'
                    }
                })
                const data = await response.json()
                console.log(data)
                if (data.results.length > 0){
                    this.lozy.push(...data.results)
                    this.page +=1
                } else {
                    this.hasMore = false
                }

            } catch (err) {
                console.log(err)
            }
            finally {
                this.loading = false
            }
        },
        resentLozy(){
            this.lozy = []
            this.page = 1;
            this.hasMore = true
        }
    }
})
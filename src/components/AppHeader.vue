<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
  name: 'AppHeader',

  data() {
    return {
        store,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png',
    }
  },

  methods: {
    searchMovies() {
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=9983fafc12ef7399a4bba69d8af1689f&query=' + this.store.searchMovies )
      .then((response) => {
        console.log(response.data)
        this.store.resultsMovie = response.data.results;
        console.log('movies', this.store.resultsMovie)
      })

      axios
      .get('https://api.themoviedb.org/3/search/tv?api_key=9983fafc12ef7399a4bba69d8af1689f&query=' + this.store.searchMovies )
      .then((response) => {
        console.log('series',response)
        this.store.resultsSeries = response.data.results
        console.log('arrayseries', this.store.resultsSeries)
      })
    },

    convertNumber(num) {
      return Math.round(num / 2)
    }

  },
}
</script>

<template>

    <header>

        <div class="main-container d-flex ai-center">

            <img :src="logo" alt="Netflix Logo">

            <div class="search-input d-flex">
                <input type="search" placeholder="Cerca un film o una serie tv..." v-model="store.searchMovies">
                <button type="button" @click="searchMovies()">Cerca</button>
            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>
header {
    height: 80px;
    background-color: $secondColor;
    .main-container {
        height: 100%;
        justify-content: space-between;
        img {
            width: 10%;
        }
        .search-input {
            input {
                display: block;
                width: 250px;
                height: 40px;
                padding: 15px;
                border-radius: 15px;
                &:focus {
                    outline: none;
                }
            }
            button {
                display: block;
                width: 70px;
                border-radius: 15px;
                margin-left: 7px;
                background-color: $mainColor;
                color: $colorText;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
</style>
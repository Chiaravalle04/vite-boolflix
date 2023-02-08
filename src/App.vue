<script>
import {store} from './store.js';
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      store,
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

  created() {
    
  }
}
</script>

<template>

  <div>
    <input type="search" placeholder="Cerca un film..." v-model="store.searchMovies">
    <button type="button" @click="searchMovies()">Cerca</button>
  </div>

  <div class="feature-movies" v-for="(item, index) in store.resultsMovie">
    <h2>Movie</h2>
    <img :src="'https://image.tmdb.org/t/p/w342' + store.resultsMovie[index].poster_path" alt="Immagine non disponibile">
    <h2>Titolo : {{ store.resultsMovie[index].title }}</h2>
    <h2>Titolo originale: {{ store.resultsMovie[index].original_title }}</h2>

    <div class="container-languages">
      <h2>Lingua originale:</h2>
      <span :class="'fi' + ' ' + 'fi-' + 'gb'" v-if="store.resultsMovie[index].original_language == 'en'"></span>
      <span :class="'fi' + ' ' + 'fi-' + store.resultsMovie[index].original_language" v-else></span>
    </div>

    <h2>Voto: {{ convertNumber(store.resultsMovie[index].vote_average) }}</h2>
    <span v-for="n in 5">
      <i 
      :class="{'fa-solid': n <= convertNumber(store.resultsMovie[index].vote_average), 'fa-regular': !(n <= convertNumber(store.resultsMovie[index].vote_average)) }" class="fa-star"></i>
    </span>
    <hr>
  </div>

  <div class="feature-movies" v-for="(item, index) in store.resultsSeries">
    <h2>Series</h2>
    <img :src="'https://image.tmdb.org/t/p/w342' + store.resultsSeries[index].poster_path" alt="Immagine non disponibile">
    <h2>Titolo : {{ store.resultsSeries[index].name }}</h2>
    <h2>Titolo originale: {{ store.resultsSeries[index].original_name }}</h2>

    <div class="container-languages">
      <h2>Lingua originale:</h2>
      <span :class="'fi' + ' ' + 'fi-' + 'gb'" v-if="store.resultsSeries[index].original_language == 'en'"></span>
      <span :class="'fi' + ' ' + 'fi-' + store.resultsSeries[index].original_language" v-else></span>
    </div>

    <h2>Voto: {{ convertNumber(store.resultsSeries[index].vote_average) }}</h2>
    <span v-for="n in 5">
      <i 
      :class="{'fa-solid': n <= convertNumber(store.resultsSeries[index].vote_average), 'fa-regular': !(n <= convertNumber(store.resultsSeries[index].vote_average)) }" class="fa-star"></i>
    </span>
    <hr>
  </div>

</template>

<style lang="scss">
.feature-movies {
  .container-languages {
    display: flex;
    span {
      width: 70px;
      margin-left: 20px;
    }
  }
}
</style>

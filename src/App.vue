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
        // console.log(response.data.results[0].title)
        console.log(response.data)
        this.store.results = response.data.results;
        console.log(this.store.results)
      } )
    },

    search() {

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

  <div v-for="(item, index) in store.results">
    <h2>Titolo : {{ store.results[index].title }}</h2>
    <h2>Titolo originale: {{ store.results[index].original_title }}</h2>
    <h2>Lingua originale: {{ store.results[index].original_language }}</h2>
    <h2>Voto: {{ store.results[index].vote_average }}</h2>
    <hr>
  </div>

</template>

<style lang="scss">

</style>

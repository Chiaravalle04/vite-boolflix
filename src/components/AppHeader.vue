<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
  name: 'AppHeader',

  data() {
    return {
      store,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png',
      active: false,
    }
    
  },

  methods: {
    searchMovies() {

      let myAPIMovie = 'https://api.themoviedb.org/3/search/movie';

      let myAPISeries = 'https://api.themoviedb.org/3/search/tv';

      axios // chiamata film
      .get(myAPIMovie, {
        params: {
          api_key: '9983fafc12ef7399a4bba69d8af1689f',
          query: this.store.searchMovies,
          language: 'it-IT'
        }
      })
      .then((response) => {
        console.log(response.data)
        this.store.resultsMovie = response.data.results;
        console.log('movies', this.store.resultsMovie);

        this.store.firstCard = 0;
        this.store.lastCard = 4;
      })

      axios // chiamata serie TV
      .get(myAPISeries, {
        params: {
          api_key: '9983fafc12ef7399a4bba69d8af1689f',
          query: this.store.searchMovies,
          language: 'it-IT'
        }
      })
      .then((response) => {
        console.log('series',response)
        this.store.resultsSeries = response.data.results
        console.log('arrayseries', this.store.resultsSeries);

        this.store.firstCardSeries = 0;
        this.store.lastCardSeries = 4;
      })

    },

    convertNumber(num) {
      return Math.round(num / 2)
    },

    reload () {
      location.reload()
    },

  },

  created() {
    
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=9983fafc12ef7399a4bba69d8af1689f')
      .then((response) => {
        this.store.movieType = response.data.genres;
        console.log(this.store.movieType)
      }),

    axios
      .get('https://api.themoviedb.org/3/genre/tv/list?api_key=9983fafc12ef7399a4bba69d8af1689f')
      .then((response) => {
        this.store.seriesType = response.data.genres;
        console.log(this.store.seriesType)
      })

  },

}
</script>

<template>

    <header>

      <div class="main-container d-flex ai-center">

        <img :src="logo" alt="Netflix Logo" @click="reload()">

        <div class="search-input d-flex ai-center">
            <i class="fa-solid fa-magnifying-glass" @click="active = true" v-if="active === false"></i>
            <input @keyup.enter="searchMovies()" type="search" placeholder="Cerca un film o una serie tv..." v-model="store.searchMovies" v-else>
        </div>

      </div>

    </header>

</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 80px;
  background-color: $secondColor;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0px 0px 18px 3px $mainColor;
  .main-container {
    height: 100%;
    justify-content: space-between;
    img {
      width: 10%;
      cursor: pointer;
    }
    .search-input {
      i {
        color: $colorText;
        font-size: 25px;
        cursor: pointer;
      }
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
    }
  }
}
</style>
<script>
import {store} from '../store.js';

export default {
  name: 'AppCardsMovies',

  data() {
    return {
      store,
      inHover: false,

    }
  },

  methods: {

    convertNumber(num) {
      return Math.round(num / 2)
    }

  },
}
</script>

<template>

  <div class="card d-flex jc-center" v-for="(item, index) in store.resultsMovie" @mouseenter="inHover = true" @mouseleave="inHover = false"> 
    <img :src="'https://image.tmdb.org/t/p/w342' + item.poster_path" alt="Immagine non disponibile" v-if="inHover === false">

    <div class="feature" v-else>
      <h2>Titolo : {{ item.title }}</h2>
      <h2>Titolo originale: {{ item.original_title }}</h2>
  
      <div class="container-languages">
      <h2>Lingua originale:</h2>
      <span class="fi fi-gb" v-if="item.original_language == 'en'"></span>
      <span :class="'fi' + ' ' + 'fi-' + item.original_language" v-else></span>
      </div>
  
      <h2>Voto: {{ convertNumber(item.vote_average) }}</h2>
      <span v-for="n in 5">
      <i :class="{'fa-solid': n <= convertNumber(item.vote_average), 'fa-regular': 5 - convertNumber(item.vote_average) }" class="fa-star"></i>
      </span>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 4 - 20px);
  margin: 10px;
  img {
    width: 100%;
  }
  .feature {
    width: 100%;
    height: 511.2px;
    color: #fff;
    border: 2px solid #fff;
  }
}
</style>
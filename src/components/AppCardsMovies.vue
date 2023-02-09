<script>
import {store} from '../store.js';

export default {
  name: 'AppCardsMovies',

  data() {
    return {
      store,
      basicUrlImg: 'https://image.tmdb.org/t/p/w342',
      inHover: null,
    }
  },

  methods: {

    convertNumber(num) {
      return Math.round(num / 2)
    },

    inHoverFunction (index) {
      if (this.inHover === index) {
        this.inHover = null;
      } else {
        this.inHover = index;
      }
    }

  },
}
</script>

<template>

  <div class="card d-flex jc-center" v-for="(item, index) in store.resultsMovie" @mouseenter="inHoverFunction(index)" @mouseleave="inHoverFunction(index)"> 
    
    <img :src="basicUrlImg + item.poster_path" alt="Immagine non disponibile" v-show="inHover !== index">

    <div class="feature" v-if="inHover === index">
      
      <h2>{{ item.title }}</h2>

      <p>{{ item.overview }}</p>

      <h4>
        Lingua originale:
        <span class="fi fi-gb" v-if="item.original_language == 'en'"></span>
        <span :class="`fi fi-${item.original_language}`" v-else></span>
      </h4>
        
      <h4>
        Valutazione:
        <span v-for="n in 5">
        <i :class="{'fa-solid': n <= convertNumber(item.vote_average), 'fa-regular': 5 - convertNumber(item.vote_average) }" class="fa-star"></i>
        </span>
      </h4>
        
    </div>

  </div>

</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 4 - 20px);
  margin: 10px;
  height: 512px;
  transition: transform 0.9s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
  img {
    width: 100%;
  }
  .feature {
    width: 100%;
    height: 512px;
    padding: 15px;
    color: #fff;
    border: 2px solid #fff;
    writing-mode: horizontal-tb;
    transform: rotateY(180deg);
    p {
      max-height: 320px;
      overflow: auto;
    }
    h2, h4 {
      margin: 10px 0;
    }
  }
}
</style>
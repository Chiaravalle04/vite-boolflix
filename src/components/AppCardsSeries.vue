<script>
import {store} from '../store.js';

export default {
  name: 'AppCardsSeries',

  data() {
    return {
      store,
      basicUrlImg: 'https://image.tmdb.org/t/p/w342',
    }
  },

  methods: {

    convertNumber(num) {
      return Math.round(num / 2)
    },

  },
}
</script>

<template>

    <div class="card d-flex jc-center" v-for="(item, index) in store.resultsSeries.slice(store.firstCardSeries, store.lastCardSeries)" @mouseenter="inHoverFunction(index)" @mouseleave="inHoverFunction(index)">
      
      <div class="card-inner">

        <div class="card-front">

          <img :src="basicUrlImg + item.poster_path" alt="" v-if="item.poster_path !== null">
  
          <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" alt="" v-else>
        
        </div>

        <div class="feature">
          
          <h2>{{ item.name }}</h2>
          
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

    </div>

</template>

<style lang="scss" scoped>
.card {
  width: 300px;
  margin: 10px;
  height: 450px;
  background-color: transparent;
  perspective: 1000px;
  border-radius: 20px;
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
  .card-front {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    img {
      width: 300px;
      height: 450px;
      border-radius: 20px;
    }
  }
  .feature {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 15px;
    color: #fff;
    border: 2px solid #fff;
    transform: rotateY(180deg);
    border-radius: 20px;
    p {
      max-height: 250px;
      overflow: auto;
    }
    h2, h4 {
      margin: 10px 0;
    }
  }
}
</style>
<script>
import {store} from '../store.js';

export default {
  name: 'AppCardsSeries',

  data() {
    return {
        store,
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

    <div class="card d-flex jc-center" v-for="(item, index) in store.resultsSeries">
      <img :src="'https://image.tmdb.org/t/p/w342' + store.resultsSeries[index].poster_path" alt="Immagine non disponibile">
      <!-- <h2>Titolo : {{ store.resultsSeries[index].name }}</h2>
      <h2>Titolo originale: {{ store.resultsSeries[index].original_name }}</h2>

      <div class="container-languages">
      <h2>Lingua originale:</h2>
      <span :class="'fi' + ' ' + 'fi-' + 'gb'" v-if="store.resultsSeries[index].original_language == 'en'"></span>
      <span :class="'fi' + ' ' + 'fi-' + store.resultsSeries[index].original_language" v-else></span>
      </div>

      <h2>Voto: {{ convertNumber(store.resultsSeries[index].vote_average) }}</h2>
      <span v-for="n in 5">
      <i :class="{'fa-solid': n <= convertNumber(store.resultsSeries[index].vote_average), 'fa-regular': 5 - convertNumber(store.resultsSeries[index].vote_average) }" class="fa-star"></i>
      </span> -->
    </div>

</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 4 - 20px);
  margin: 10px;
  img {
    width: 100%;
  }
}
</style>
<script>
import {store} from '../store.js';
import AppCardsMovies from './AppCardsMovies.vue'
import AppCardsSeries from './AppCardsSeries.vue'

export default {
  name: 'AppMain',

  components: {
    AppCardsMovies,
    AppCardsSeries,
  },

  data() {
    return {
        store,
    }
  },

}
</script>

<template>

    <main>

        <div class="main-container">

            <h2>Film <i class="fa-solid fa-star"></i></h2>

            <div class="cards d-flex">

                <AppCardsMovies/>

            </div>

            <h2>Serie TV</h2>

            <div class="cards d-flex">

                <AppCardsSeries/>

            </div>

        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 80px);
    background-color: $secondColor;
    h2 {
        color: $colorText;
    }
    .cards {
        flex-wrap: wrap;
    }
}
</style>
<script>
import {store} from '../store.js';
import AppCardsMovies from './AppCardsMovies.vue';
import AppCardsSeries from './AppCardsSeries.vue';

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

    methods: {

        nextSlide() {

            if (this.store.lastCard >= this.store.resultsMovie.length - 1) {

                this.store.firstCard = 0;

                this.store.lastCard = 4;

            } else {

                this.store.firstCard++;

                this.store.lastCard++;

            }

        },

        prevSlide() {

            this.store.firstCard--;

            this.store.lastCard--;

        },

        nextSlideSeries() {

            if (this.store.lastCardSeries >= this.store.resultsSeries.length - 1) {

                this.store.firstCardSeries = 0;

                this.store.lastCardSeries = 4;

            } else {

                this.store.firstCardSeries++;

                this.store.lastCardSeries++;

            }

        },

        prevSlideSeries() {

            this.store.firstCardSeries--;

            this.store.lastCardSeries--;

        },

    }

}
</script>

<template>

    <h2>Film</h2>

    <div class="cards d-flex jc-center ai-center">

        <button id="prev" @click="prevSlide()" v-if="store.firstCard > 0"><i class="fa-solid fa-chevron-left"></i></button>

        <AppCardsMovies/>

        <button id="next" @click="nextSlide()" v-if="store.resultsMovie.length > 4"><i class="fa-solid fa-chevron-right"></i></button>

    </div>

    <h2>Serie TV</h2>

    <div class="cards d-flex jc-center ai-center">

        <button id="prev" @click="prevSlideSeries()" v-if="store.firstCardSeries > 0"><i class="fa-solid fa-chevron-left"></i></button>

        <AppCardsSeries/>

        <button id="next" @click="nextSlideSeries()" v-if="store.resultsSeries.length > 4"><i class="fa-solid fa-chevron-right"></i></button>

    </div>

</template>

<style lang="scss" scoped>
h2 {
    color: $colorText;
    text-align: center;
    margin-top: 15px;
}
.cards {
    height: 500px;
    margin: 50px 0;
    position: relative;
    button {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: transparent;
        border: 0;
        color: $mainColor;
        cursor: pointer;
        &:hover i {
            color: $colorText;
        }
        i {
            font-weight: bold;
            font-size: 30px;
        }
    }
    #prev {
        position: absolute;
        left: 0;
    }
    #next {
        position: absolute;
        right: 0;
    }
}
</style>
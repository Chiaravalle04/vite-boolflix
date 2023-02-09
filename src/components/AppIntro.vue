<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
    name: 'AppIntro',

    data () {
        return {
            store,
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
                console.log('movies', this.store.resultsMovie)
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
                console.log('arrayseries', this.store.resultsSeries)
            })

        },
    }

}
</script>

<template>

    <div class="bg-intro">

        <div class="title">

            <h1>Cerca il tuo film o la tua serie TV preferita!</h1>
    
            <input @keyup.enter="searchMovies()" type="search" placeholder="Cerca un film o una serie tv..." v-model="store.searchMovies">

        </div>

        <div class="overlay"></div>

    </div>


</template>

<style lang="scss" scoped>
.bg-intro {
    height: calc(100vh - 110px);
    background-image: url('https://wallpaperaccess.com/full/1512223.jpg');
    background-size: contain;
    background-position: center;
    position: relative;
    .title {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        h1 {
            color: $colorText;
            text-align: center;
            font-size: 70px;
        }
        input {
          display: block;
          margin: 20px auto;
          width: 550px;
          height: 50px;
          padding: 15px;
          border-radius: 15px;
          font-size: 17px;
          &:focus {
              outline: none;
              border: 3px solid $mainColor;
              box-shadow: 0px 0px 18px 3px $mainColor;
          }
      }
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20,20,20,0.9); 
    z-index: 0; 
}
</style>
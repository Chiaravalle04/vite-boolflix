<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
    
  },

  data() {
    return {
      store,
    }
  },

}
</script>

<template>

  <AppHeader/>
  <i class="fa-solid fa-star"></i>
  <AppMain/>

</template>

<style lang="scss">
@import '../src/styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
</style>

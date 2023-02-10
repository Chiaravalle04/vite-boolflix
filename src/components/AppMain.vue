<script>
import {store} from '../store.js';
import ContainerCard from './ContainerCard.vue';
import AppIntro from './AppIntro.vue';

export default {
    name: 'AppMain',

    components: {
        AppIntro,
        ContainerCard,
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

        <AppIntro v-if="store.resultsMovie.length == 0"/>

        <div class="main-container">

            <ContainerCard v-if="store.resultsMovie.length > 0"/>

        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    padding: 80px 0 10px 0;
    background-color: $secondColor;
}
</style>
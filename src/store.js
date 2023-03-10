import { reactive } from 'vue';

export const store = reactive({
    resultsMovie: [],
    resultsSeries: [],
    movieType: [],
    seriesType: [],
    searchMovies: '',
    firstCard: 0,
    lastCard: 4,
    firstCardSeries: 0,
    lastCardSeries: 4,
});
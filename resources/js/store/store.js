import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutation_types';
import subjects from './subject';

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        mutation,
        subjects
    }
})
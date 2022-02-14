import {createStore} from 'vuex';
import mutation from './mutation_types';
import subjects from './subject';

export const store = createStore({
    modules: {
        mutation,
        subjects
    }
})
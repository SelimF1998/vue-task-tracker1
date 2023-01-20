import { createStore, storeKey } from 'vuex';
import tasks from './modules/tasks';

//create store
const store = createStore({
    modules: {
        tasks,
    }
});

export default store;


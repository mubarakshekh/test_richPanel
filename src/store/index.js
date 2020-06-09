import Vuex from 'vuex';
import Vue from 'vue';
import weatherApp from './modules/weatherApp';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        weatherApp
    }
})
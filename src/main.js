import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './store'
import Filter from './filters'
// import Chartkick from "vue-chartkick";
// import Chart from "chart.js";
import VModal from 'vue-js-modal'



Vue.config.productionTip = false


// Vue.use(Chartkick.use(Chart))
Vue.use(VModal)

new Vue({
  Filter,
  VModal,
  'store' : Store,
  render: h => h(App),
}).$mount('#app')

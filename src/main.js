import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


axios.defaults.baseURL = 'http://localhost:3000'; // for development dB


// Require the main Sass manifest file
require('./assets/sass/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

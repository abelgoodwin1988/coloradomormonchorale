import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';


library.add(faAngleDoubleDown, faAngleDoubleUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000'; // for development dB


// Require the main Sass manifest file
require('./assets/sass/main.scss');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

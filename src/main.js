import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

// Require the main Sass manifest file
require('./assets/sass/main.scss');

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

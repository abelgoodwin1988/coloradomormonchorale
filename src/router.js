import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Performances from './views/Performances.vue';
import Auditions from './views/Auditions.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/performances',
      name: 'performances',
      component: Performances,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/auditions',
      name: 'auditions',
      component: Auditions,
    },
  ],
});

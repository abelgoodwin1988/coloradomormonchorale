import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Performances from './views/Performances.vue';
import Auditions from './views/Auditions.vue';
import Members from './views/Members.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';
import Login from './views/admin/Login.vue';

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
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

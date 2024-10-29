import Vue from 'vue';
import Router from 'vue-router';
import InicioPage from './components/pages/InicioPage.vue';
import NewsPage from './components/pages/NewsPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: InicioPage, name: 'home' },
    { path: '/news', component: NewsPage, name: 'news' },
  ],
});

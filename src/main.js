import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home';
import DevRelCon from './components/DevRelCon';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/bonus/devrelcon2018',
    component: DevRelCon
  }
];

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

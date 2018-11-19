// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
// 之所以可以下面这么写是因为在build\webpack.base.conf.js里配置了alias别名
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

// 全局注册
Vue.use(VueRouter);
Vue.use(VueResource);

let routes = [
  {
    path: '/goods', component: goods
  }, {
    path: '/ratings', component: ratings
  }, {
    path: '/seller', component: seller
  }
];

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
}).$mount('#app');

router.push('/goods');

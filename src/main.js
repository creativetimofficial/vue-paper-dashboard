import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import GlobalComponents from './gloablComponents'

//library imports
import Chartist from 'chartist'
import 'es6-promise/auto'
import 'bootstrap-notify'

//plugin setup
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(GlobalComponents);


import App from './App'

//router setup
import routes from './routes/routes'
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: "active"
});


//vuex store
import store from './vuex/store'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  },
});

//global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  }
});

Vue.http.options.xhr = {withCredentials: true}

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vClickOutside from 'v-click-outside'
import GlobalComponents from './gloablComponents'

//library imports
import Chartist from 'chartist'
import 'es6-promise/auto'
import 'bootstrap-notify'
import 'bootstrap/dist/css/bootstrap.css'

//plugin setup
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(GlobalComponents);
Vue.use(vClickOutside)

import App from './App'

//router setup
import routes from './routes/routes'
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});


//vuex store
import store from './vuex/store'

//global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  },
});



Vue.http.options.xhr = {withCredentials: true}

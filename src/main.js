import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'

//library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import 'es6-promise/auto'

//plugin setup
Vue.use(VueRouter);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);

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

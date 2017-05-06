import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      showSidebar: false,
    },
    mutations: {
      setShowSidebar (state, value) {
        state.showSidebar = value;
      }
    },
    getters: {
      showSidebar: state => {
        return state.showSidebar;
      },
    }
  }
);

export default store;

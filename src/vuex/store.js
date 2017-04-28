import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      showSidebar: false,
      isSidebarMinimized: false,
    },
    mutations: {
      setShowSidebar (state, value) {
        state.showSidebar = value;
      },
      setIsSidebarMinimized(state, value){
        state.isSidebarMinimized = value;
      }
    },

    actions: {
      setShowSidebar({commit}, value){
        commit(types.SET_SHOW_SIDEBAR, value);
      },
      setSideBarMinimized({commit}, value){
        commit(types.SET_SIDEBAR_MINIMIZED, value);
      }
    },

    getters: {
      showSidebar: state => {
        return state.showSidebar;
      },
      isSidebarMinimized: state => {
        return state.isSidebarMinimized;
      }
    }
  }
);

var types = {
  SET_SHOW_SIDEBAR: 'setShowSidebar',
  SET_SIDEBAR_MINIMIZED: 'setIsSidebarMinimized',
};

export default store;

<template>
  <div :class="{'nav-open': showSidebar}">
    <router-view></router-view>
    <side-bar type="navbar"></side-bar>
  </div>
</template>

<script>
import SideBar from './components/Dashboard/Layout/SideBar.vue'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showSidebar', 'isSidebarMinimized'])
  },
  components: {
    SideBar
  }
}
</script>

<style lang="scss"></style>

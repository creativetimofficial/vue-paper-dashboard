<template>
  <div :class="{'nav-open': showSidebar}">
    <side-bar type="sidebar">

    </side-bar>
    <div class="main-panel" :class="{'push-left': showSidebar}">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer></content-footer>
    </div>
    <side-bar type="navbar"></side-bar>
    <div id="bodyClick"></div>
  </div>
</template>
<style lang="scss">


</style>
<script>
  import SideBar from './SideBar.vue'
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import {mapActions, mapGetters} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed: {
      ...mapGetters(['showSidebar', 'isSidebarMinimized']),
    },
    components: {
      SideBar,
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
  }
</script>

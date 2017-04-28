<template>
  <div class="wrapper">
    <side-bar>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer></content-footer>
    </div>
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
    components: {
      SideBar,
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
  }
</script>

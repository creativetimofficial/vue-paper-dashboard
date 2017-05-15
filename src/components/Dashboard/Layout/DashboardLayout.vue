<template>
  <div class="wrapper">
    <side-bar type="sidebar">
  
    </side-bar>
    <notifications>
  
    </notifications>
    <div class="main-panel">
      <top-navbar></top-navbar>
  
      <dashboard-content @click.native="toggleSidebar">
  
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
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['showSidebar'])
    },
    components: {
      SideBar,
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      ...mapMutations(['setShowSidebar']),
      toggleSidebar () {
        if (this.showSidebar) {
          this.setShowSidebar(false)
        }
      }
    }
  }

</script>

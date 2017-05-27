<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <form class="navbar-form navbar-left navbar-search-form" role="search">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-search"></i>
            </span>
            <input type="text" value="" class="form-control" placeholder="Search...">
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <li class="dropdown" :class="{open:activeNotifications}" @click="toggleNotificationDropDown" v-click-outside="closeDropDown">
            <a href="#" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
              <i class="ti-bell"></i>
              <p class="notification">5 Notifications
                <b class="caret"></b>
              </p>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#not1">Notification 1</a>
              </li>
              <li>
                <a href="#not2">Notification 2</a>
              </li>
              <li>
                <a href="#not3">Notification 3</a>
              </li>
              <li>
                <a href="#not4">Notification 4</a>
              </li>
              <li>
                <a href="#another">Another notification</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="btn-rotate">
              <i class="ti-settings"></i>
              <p class="hidden-md hidden-lg">
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const { name } = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>

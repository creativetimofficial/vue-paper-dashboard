<template>
  <li class="dropdown" :class="{open:activeNotifications}" @click="toggleNotificationDropDown" v-click-outside="closeDropDown">
    <a href="#" class="dropdown-toggle btn-rotate" data-toggle="dropdown">
      <i class="ti-bell"></i>
      <p class="notification">5 Notifications
        <b class="caret"></b>
      </p>
    </a>
    <ul class="dropdown-menu">
      <slot>
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
      </slot>
    </ul>
  </li>
</template>
<script>
  export default {
    props: {
      title: String,
      icon: {
        type: String,
        default: 'ti-bell'
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      }
    }
  }

</script>
<style>
  
</style>

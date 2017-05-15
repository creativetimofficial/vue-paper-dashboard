<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Notifications</h4>
      <p class="category">Custom Vue notifications plugin</p>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-md-6">
          <h5>Notifications Style</h5>
          <div class="alert alert-info">
            <span>This is a plain notification</span>
          </div>
          <div class="alert alert-info">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>This is a notification with close button.</span>
          </div>
          <div class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-bell"></span>
            <span data-notify="message">This is a notification with close button and icon.</span>
          </div>
          <div class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-pie-chart"></span>
            <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Notification states</h5>
          <div class="alert alert-info">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Info - </b> This is a regular notification made with ".alert-info"</span>
          </div>
          <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Success - </b> This is a regular notification made with ".alert-success"</span>
          </div>
          <div class="alert alert-warning">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
          </div>
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>
              <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
          </div>
        </div>
      </div>
  
      <br>
      <br>
  
      <div class="places-buttons">
        <div class="row">
          <div class="col-md-9">
            <h5>Notifications Places
              <p class="category">Click to view notifications</p>
            </h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('top', 'left')">Top Left</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('top', 'center')">Top Center</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('top', 'right')">Top Right</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'left')">Bottom Left</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'center')">Bottom Center</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notifyVue('bottom', 'right')">Bottom Right</button>
          </div>
  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'
  export default {
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    components: {
      PaperNotification
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        var color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: 'Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.',
            icon: 'ti-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style>
  
</style>

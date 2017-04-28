<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Notifications</h4>
      <p class="category">Handcrafted by our friend <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the <a
        href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full documentation.</a></p>
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
            <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
          </div>
          <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
          </div>
          <div class="alert alert-warning">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
          </div>
          <div class="alert alert-danger">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
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
            <button class="btn btn-default btn-block" @click="notify('top','left')">Top Left</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notify('top','center')">Top Center</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notify('top','right')">Top Right</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notify('bottom','left')">Bottom Left</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notify('bottom','center')">Bottom Center</button>
          </div>
          <div class="col-md-3">
            <button class="btn btn-default btn-block" @click="notify('bottom','right')">Bottom Right</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        type: ['', 'info', 'success', 'warning', 'danger']
      }
    },
    methods: {
      notify(from, align){
        var color = Math.floor((Math.random() * 4) + 1);

        $.notify({
          icon: "ti-gift",
          message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."

        }, {
          type: this.type[color],
          timer: 4000,
          placement: {
            from: from,
            align: align
          }
        });
      }
    },
  }
</script>
<style>
</style>

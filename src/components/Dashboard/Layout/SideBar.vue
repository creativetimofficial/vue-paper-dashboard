<template>
  <div class="sidebar" :data-background-color="backgroundColor" :data-active-color="activeColor">
    <!--
          Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
          Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
      -->
    <div class="logo">
      <a href="http://www.creative-tim.com" class="simple-text">
        Creative Tim
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <router-link v-for="(link,index) in sidebarLinks" :to="link.path" tag="li">
          <a>
            <i :class="link.icon"></i>

            <p>{{link.name}}
            </p>
          </a>
        </router-link>

      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    props: {
      backgroundColor: {
        type: String,
        default: 'black' //white | black
      },
      activeColor: {
        type: String,
        default: 'danger' //primary | info | success | warning | danger
      },
    },
    data(){
      return {
        sidebarLinks: [{
          name: "Dashboard",
          icon: 'ti-panel',
          path: "/admin/overview",
        },
          {
            name: "User Profile",
            icon: 'ti-user',
            path: "/admin/stats",
          },
          {
            name: "Typography",
            icon: 'ti-text',
            path: "/admin/typography",
          },
          {
            name: "Icons",
            icon: 'ti-pencil-alt2',
            path: "/admin/icons",
          },
          {
            name: "Maps",
            icon: 'ti-map',
            path: "/admin/maps",
          },
          {
            name: "Notifications",
            icon: 'ti-bell',
            path: "/admin/notifications",
          }
        ],
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
      }
    },
  }
</script>
<style>
</style>

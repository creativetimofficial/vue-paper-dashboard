<template>
  <div :class="sidebarClasses" :data-background-color="backgroundColor" :data-active-color="activeColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="#" class="simple-text">
          Paper Dashboard
        </a>
      </div>
      <ul :class="navClasses">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <router-link v-for="(link,index) in sidebarLinks" :to="link.path" tag="li" :ref="link.name">
          <a>
            <i :class="link.icon"></i>
  
            <p>{{link.name}}
            </p>
          </a>
        </router-link>
      </ul>
      <moving-arrow :move-y="arrowMovePx">
  
      </moving-arrow>
    </div>
  </div>
</template>
<script>
  import MovingArrow from 'src/components/UIComponents/MovingArrow.vue'
  // import { mapGetters } from 'vuex'
  export default {
    props: {
      type: {
        type: String,
        default: 'sidebar',
        validator: (value) => {
          let acceptedValues = ['sidebar', 'navbar']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundColor: {
        type: String,
        default: 'black',
        validator: (value) => {
          let acceptedValues = ['white', 'black']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      activeColor: {
        type: String,
        default: 'danger',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', ' success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      }
    },
    components: {
      MovingArrow
    },
    computed: {
      sidebarClasses () {
        if (this.type === 'sidebar') {
          return 'sidebar'
        } else {
          return 'collapse navbar-collapse off-canvas-sidebar'
        }
      },
      navClasses () {
        if (this.type === 'sidebar') {
          return 'nav'
        } else {
          return 'nav navbar-nav'
        }
      },
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx () {
        return this.linkHeight * this.activeLinkIndex
      }
    },
    data () {
      return {
        linkHeight: 60,
        activeLinkIndex: 0,
        sidebarLinks: [{
          name: 'Dashboard',
          icon: 'ti-panel',
          path: '/admin/overview'
        },
        {
          name: 'User Profile',
          icon: 'ti-user',
          path: '/admin/stats'
        },
        {
          name: 'Table List',
          icon: 'ti-view-list-alt',
          path: '/admin/table-list'
        },
        {
          name: 'Typography',
          icon: 'ti-text',
          path: '/admin/typography'
        },
        {
          name: 'Icons',
          icon: 'ti-pencil-alt2',
          path: '/admin/icons'
        },
        {
          name: 'Maps',
          icon: 'ti-map',
          path: '/admin/maps'
        },
        {
          name: 'Notifications',
          icon: 'ti-bell',
          path: '/admin/notifications'
        }
        ],
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false
      }
    },
    methods: {
      findActiveLink () {
        this.sidebarLinks.find((element, index) => {
          let found = element.path === this.$route.path
          if (found) {
            this.activeLinkIndex = index
          }
          return found
        })
      }
    },
    mounted () {
      this.findActiveLink()
    },
    watch: {
      $route: function (newRoute, oldRoute) {
        this.findActiveLink()
      }
    }
  }

</script>
<style>
  
</style>

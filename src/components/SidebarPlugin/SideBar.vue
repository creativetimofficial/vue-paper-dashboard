<template>
  <div class="sidebar"
       :data-background-color="backgroundColor"
       :data-active-color="activeColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="#" class="simple-text">
            <div class="logo-img">
                <img src="static/img/vue-logo.png" alt="">
            </div>
          Paper Dashboard
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <router-link v-for="(link,index) in sidebarLinks"
                     class="nav-item"
                     :to="link.path"
                     tag="li"
                     :ref="link.name"
                     :key="link.name + index">
          <a class="nav-link">
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
import MovingArrow from "./MovingArrow.vue";
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "black",
      validator: value => {
        let acceptedValues = ["white", "black", "darkblue"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    activeColor: {
      type: String,
      default: "success",
      validator: value => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  components: {
    MovingArrow
  },
  computed: {
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex;
    }
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,

      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false
    };
  },
  methods: {
    findActiveLink() {
      this.sidebarLinks.find((element, index) => {
        let found = element.path === this.$route.path;
        if (found) {
          this.activeLinkIndex = index;
        }
        return found;
      });
    }
  },
  mounted() {
    this.findActiveLink();
  },
  watch: {
    $route: function(newRoute, oldRoute) {
      this.findActiveLink();
    }
  }
};
</script>
<style>
</style>

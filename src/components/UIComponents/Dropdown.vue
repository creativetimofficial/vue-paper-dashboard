<template>
  <li class="dropdown" :class="{open:isOpen}" @click="toggleOnItemClick">
    <a href="#" class="dropdown-toggle btn-rotate" data-toggle="dropdown" @click="toggleDropDown">
      <slot name="title">
        <i :class="icon"></i>
        <p class="notification">{{title}}
          <b class="caret"></b>
        </p>
      </slot>
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default{
    props: {
      title: String,
      icon: String,
      toggleOnItem: Boolean
    },
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleDropDown () {
        this.isOpen = !this.isOpen
      },
      closeDropDown () {
        this.isOpen = false
      },
      toggleOnItemClick () {
        if (this.toggleOnItem) {
          this.toggleDropDown()
        }
      }
    }
  }
</script>

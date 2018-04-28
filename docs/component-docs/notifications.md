# Notifications
<script>
export default {
     data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            message: 'Welcome to Light Bootstrap Dashboard - a beautiful freebie for every web developer.',
            icon: 'fa fa-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>
<style lang="scss">
.vue-notifyjs.notifications{
  .alert{
   z-index: 100;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;

  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);

  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}
</style>

<hr>
We restyled the classic Bootstrap Alert and gave it a more attractive look.
We used [Vue-notifyjs](https://github.com/cristijora/vue-notifyjs) to easily add notifications from anywhere within the app.

## Usage
To use Vue-notifyjs, you have to import it and declare it as a plugin.
```js
import VueNotify from 'vue-notifyjs'
import 'vue-notifyjs/themes/default.css'
Vue.use(VueNotify)
```
This is done inside `src/main.js` file.

::: tip
Vue-notifyjs has a default `list` transition which you can change through css in order to achieve your desired notification transition
:::

### Trigger notificaitons with custom transition
::: demo
```html
<template>
<div class="places-buttons">
  <notifications></notifications>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 text-center">
        <p class="category">Click to view notifications</p>
     </h5>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 col-md-offset-1">
      <p-button type="default" block @click.native="notifyVue('top', 'left')">Top Left</p-button>
    </div>
    <div class="col-md-3">
      <p-button type="default" block @click.native="notifyVue('top', 'center')">Top Center</p-button>
    </div>
    <div class="col-md-3">
      <p-button type="default" block @click.native="notifyVue('top', 'right')">Top Right</p-button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 col-md-offset-1">
      <p-button type="default" block @click.native="notifyVue('bottom', 'left')">Bottom Left</p-button>
    </div>
    <div class="col-md-3">
      <p-button type="default" block @click.native="notifyVue('bottom', 'center')">Bottom Center</p-button>
    </div>
    <div class="col-md-3">
      <p-button type="default" block @click.native="notifyVue('bottom', 'right')">Bottom Right</p-button>
    </div>

  </div>
</div>
</template>

<script>
  export default {
     data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            message: 'Welcome to Light Bootstrap Dashboard - a beautiful freebie for every web developer.',
            icon: 'fa fa-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }
</script>
<style lang="scss">
.vue-notifyjs.notifications{
  .alert{
   z-index: 100;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;

  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);

  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}

</style>
```
:::

::: tip
For detailed usage please check out [Vue-notifyjs repo](https://github.com/cristijora/vue-notifyjs)
:::

import Vue from "vue";
window.mount = function mount(Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({propsData}).$mount()
  return vm;
}

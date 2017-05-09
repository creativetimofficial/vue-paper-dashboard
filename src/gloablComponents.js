import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'

var GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
  }
}

export default GlobalComponents

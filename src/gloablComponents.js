import fgInput from './components/UIComponents/Inputs/formGroupInput.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
  }
}

export default GlobalComponents

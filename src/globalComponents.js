import {FormGroupInput, Card, DropDown} from './components/index'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', FormGroupInput)
    Vue.component('drop-down', DropDown)
    Vue.component('card', Card)
  }
}

export default GlobalComponents

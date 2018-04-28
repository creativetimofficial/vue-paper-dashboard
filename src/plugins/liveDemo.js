import VueAnalytics from 'vue-analytics'
import SocialSharing from 'vue-social-sharing'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
import router from '@/router/index'

export default {
  install(Vue){
    Vue.use(SocialSharing)
    Vue.use(VueGitHubButtons, { useCache: true })
    Vue.use(VueAnalytics, {
      id: 'UA-46172202-9',
      router,
      autoTracking: {
        pageviewOnLoad: false
      }
    })
  }
}

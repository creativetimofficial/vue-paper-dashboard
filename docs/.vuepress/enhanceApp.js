import './docs.scss'
import DemoBlock from './demo-block/demo-block'
// Plugins
import GlobalComponents from '@/plugins/globalComponents'
import GlobalDirectives from '@/plugins/globalDirectives'
// MaterialDashboard plugin
import Dashboard from '@/plugins/paperDashboard';
import * as components from '@/components/index';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  Vue.use(Dashboard)
  Vue.use(GlobalComponents);
  Vue.use(GlobalDirectives);
  Vue.component('demo-block', DemoBlock);
  Object.keys(components).forEach(compKey => {
    let componentInstance = components[compKey];
    if(componentInstance.name){
      Vue.component(componentInstance.name, componentInstance);
    }
  });
}

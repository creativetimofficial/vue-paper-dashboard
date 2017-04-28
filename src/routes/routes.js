//Authentication components
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
//GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: view('Overview')
      },
      {
        path: 'stats',
        name: 'stats',
        component: view('UserProfile')
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: view('Notifications')
      },
      {
        path: 'icons',
        name: 'icons',
        component: view('Icons')
      },
      {
        path: 'maps',
        name: 'maps',
        component: view('Maps')
      },
      {
        path: 'typography',
        name: 'typography',
        component: view('Typography')
      },
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 */
function view(name) {
  return function (resolve) {
    require(['../components/Dashboard/Views/' + name + '.vue'], resolve);
  }
};

export default routes;

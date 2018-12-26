import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import ClientsList from "@/pages/ClientsList.vue";
import BusinessesList from "@/pages/BusinessList.vue";
import ActivityList from "@/pages/ActivityList.vue";
import EmployeesList from '@/pages/EmployeesList.vue';
import PartnersList from '@/pages/ParnetsList.vue';
import ServicesList from '@/pages/ServicesList.vue';
import SuscribedCustomerList from '@/pages/SuscribedCustomerList';

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "clients-list",
        name: "clientes",
        component: ClientsList
      },
      {
        path: "businesses-list",
        name: "Negocios",
        component: BusinessesList
      },
      {
        path: "services-list",
        name: "Servicios",
        component: ServicesList
      },
      {
        path: "partners-list",
        name: "Socios",
        component: PartnersList
      },
      {
        path: "employees-list",
        name: "Empleados",
        component: EmployeesList
      },
      {
        path: "suscribedCustomer-list",
        name: "Clientes suscritos",
        component: SuscribedCustomerList
      },
      {
        path: "activity-list",
        name: "Lista de Actividades",
        component: ActivityList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

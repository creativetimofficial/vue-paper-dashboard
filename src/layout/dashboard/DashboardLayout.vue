<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Tablero" icon="ti-panel"/>
        <sidebar-link to="/stats" name="Perfil de usuario" icon="ti-user"/>
        <sidebar-link to="/clients-list" name="Clientes" icon="ti-view-list-alt"/>
        <sidebar-link to="/businesses-list" name="Negocios" icon="ti-view-list-alt"/>
        <sidebar-link to="/employees-list" name="Empleados" icon="ti-view-list-alt"/>
        <sidebar-link to="/partners-list" name="Socios" icon="ti-view-list-alt"/>
        <sidebar-link to="/services-list" name="Servicios" icon="ti-view-list-alt"/>
        <sidebar-link to="/activity-list" name="Actividades" icon="ti-view-list-alt"/>
        <sidebar-link to="/suscribedCustomer-list" name="Suscriptores" icon="ti-view-list-alt"/>
        <sidebar-link to="/typography" name="Typography" icon="ti-text"/>
        <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
        <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Estadisticas</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

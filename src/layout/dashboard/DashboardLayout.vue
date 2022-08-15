<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/maps" name="Inicio" icon="ti-home"/>
        <sidebar-link to="/table-list" name="Reportes" icon="ti-alert"/>
        <sidebar-link to="/typography" name="Sobre nosotros" icon="ti-user"/>
        </template>      
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
export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
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

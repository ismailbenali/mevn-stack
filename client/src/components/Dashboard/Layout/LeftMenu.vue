<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="home">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="feedbacks">
        <i class="nc-icon nc-notes"></i>
        <p>Feedbacks</p>
      </sidebar-link>
      <sidebar-link to="statistics">
        <i class="nc-icon nc-paper-2"></i>
        <p>Statistics</p>
      </sidebar-link>
      <sidebar-link to="maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>

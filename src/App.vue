<template>
  <div>
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
    <Footer /> 
  </div>
</template>

<script>
import Header from "./assets/components/AppHeader.vue";
import Footer from "./assets/components/AppFooter.vue";

export default {
  components: { Header, Footer },
  beforeCreate() {
    this.$store.commit('initializationStore');
  }
};
</script>

<style lang="scss">
</style>

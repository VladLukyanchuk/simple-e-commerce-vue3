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
//import Login from "./assets/components/log-in_pop-up.vue"
import Header from "./assets/components/header_component.vue";
import Footer from "./assets/components/footer_component.vue";

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
</style>

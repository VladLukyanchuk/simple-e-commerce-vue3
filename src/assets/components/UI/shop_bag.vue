<template>
  <button class="shop-bag">
    <box-icon
      class="shop-bag__icon"
      color="#101010"
      name="shopping-bag"
    ></box-icon>
    <span class="shop-bag__counter" :class="{'shop-bag__counter_animation': animation}">{{ quantity }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      animation: false,
    };
  },
  computed: {
    quantity() {
      return this.$store.getters.getCartQuantity;
    },
  },
  watch: {
    quantity() {
      this.animation = true;
      
      setTimeout(() => this.animation = false, 1000);
    },
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
</style>
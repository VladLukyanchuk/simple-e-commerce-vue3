<template>
  <main class="main">
    <div class="main__content">
      <h2 class="main__title">All Products</h2>
      <div class="main__products">
        <Card
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :price="`${product.price} $`"
          :imgURL="product.imgURL"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/assets/components/UI/product_card";

import products from "@/seeders/products";

export default {
  components: { Card },
  data() {
    return {
      products,
    };
  },
};
</script>

<style lang="scss">
</style>
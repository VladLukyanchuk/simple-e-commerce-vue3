<template>
  <main class="main">
    <div class="main__content">
      <h2 class="main__title">All Products</h2>
      <filter-component @filterByPrice="filterByPrice" />
      <section class="main__products">
        <Card
          v-for="product in filter"
          :key="product.id"
          :name="product.name"
          :price="`${product.price} $`"
          :imgURL="product.imgURL"
          :link="`/${product.alias}`"
        />
      </section>
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
      filter: products
    };
  },
  methods: {
    filterByPrice(arr) {
      const filtered = this.products.filter((elem) => {
        if (elem.price >= arr[0] && elem.price <= arr[1]) {
          return true;
        }
      });
      this.filter = filtered;
    },
  },
};
</script>

<style lang="scss">
</style>
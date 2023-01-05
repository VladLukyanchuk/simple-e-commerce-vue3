<template>
  <div class="product-card">
    <div class="product-card__images">
      <div class="product-card__active-img">
        <img :src="product.imgURL[0]" alt="" />
      </div>
      <div class="product-card__all-img">
        <img :src="product.imgURL[0]" alt="" />
        <img :src="product.imgURL[1]" alt="" />
        <img :src="product.imgURL[2]" alt="" />
        <img :src="product.imgURL[3]" alt="" />
      </div>
    </div>
    <div class="product-card__info">
      <div class="product-card__top-container">
        <h2 class="product-card__title">{{ product.name }}</h2>
        <div class="product-card__price">Price: {{ product.price }} $</div>
        <div class="product-card__select-size">
          <ul class="product-card__sizes">
            <li class="product-card__size">XS</li>
            <li class="product-card__size">S</li>
            <li class="product-card__size">M</li>
            <li class="product-card__size">L</li>
            <li class="product-card__size">XL</li>
          </ul>
        </div>
        <div class="product-card__quantity">
          <button class="product-card__add">+</button>
          <div class="product-card__number">1</div>
          <button class="product-card__delete">+</button>
        </div>
        <button class="product-card__buy">Buy</button>
      </div>
      <div class="product-card__bottom-container">
        <h3 class="product-card__description-title">Description</h3>
        <div class="product-card__description">
          {{ product.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/seeders/products";

export default {
  data() {
    return {
      product: null,
    };
  },

  created() {
    const alias = this.$route.params.productAlias;
    const item = products.find((el) => el.alias === alias);

    if (item) {
      this.product = item;
    }
  },
};
</script>
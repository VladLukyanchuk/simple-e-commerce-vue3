<template>
  <div class="product-card">
    <div class="product-card__images">
      <div class="product-card__active-img">
        <img :src="currentPhoto" alt="" />
      </div>
      <div class="product-card__all-img">
        <div v-for="(img, index) in product.imgURL" :key="index">
          <img
            :src="img"
            alt="product photo"
            @click="changeActiveImg(index)"
            :class="{
              'product-card_active-img': img === currentPhoto,
            }"
          />
        </div>
      </div>
    </div>
    <div class="product-card__info">
      <div class="product-card__top-container">
        <h2 class="product-card__title">{{ product.name }}</h2>
        <div class="product-card__price">Price: {{ product.price }} $</div>
        <div class="product-card__select-size">
          <div class="product-card__sizes" @change="onChange">
            <input
              type="radio"
              name="XS"
              value="XS"
              id="xs"
              v-model="selectedSize"
            />
            <label
              class="product-card__size"
              :class="{ 'product-card__size_selected': selectedSize == 'XS' }"
              for="xs"
              >XS</label
            >

            <input
              type="radio"
              name="S"
              value="S"
              id="s"
              v-model="selectedSize"
            />
            <label
              class="product-card__size"
              :class="{ 'product-card__size_selected': selectedSize == 'S' }"
              for="s"
              >S</label
            >

            <input
              type="radio"
              name="M"
              value="M"
              id="m"
              v-model="selectedSize"
            />
            <label
              class="product-card__size"
              :class="{ 'product-card__size_selected': selectedSize == 'M' }"
              for="m"
              >M</label
            >

            <input
              type="radio"
              name="L"
              value="L"
              id="l"
              v-model="selectedSize"
            />
            <label
              class="product-card__size"
              :class="{ 'product-card__size_selected': selectedSize == 'L' }"
              for="l"
              >L</label
            >

            <input
              type="radio"
              name="XL"
              value="XL"
              id="xl"
              v-model="selectedSize"
            />
            <label
              class="product-card__size"
              :class="{ 'product-card__size_selected': selectedSize == 'XL' }"
              for="xl"
              >XL</label
            >
          </div>
        </div>
        <div class="product-card__quantity">
          <Number @quantityChange="quantityChange"/>
        </div>
        <button class="product-card__buy" @click="addToCart">
          Add To Cart
        </button>
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
/* eslint-disable */

import products from "@/seeders/products";
import Number from "@/assets/components/UI/input_number.vue"

export default {
  components: {Number},
  data() {
    return {
      product: null,
      currentPhoto: "",
      selectedSize: "S",
      quantity: 1,
    };
  },

  created() {
    const alias = this.$route.params.productAlias;
    const item = products.find((el) => el.alias === alias);

    if (item) {
      this.product = item;
      this.currentPhoto = item.imgURL[0];
    }
  },

  computed: {},

  methods: {
    quantityChange(value) {
      this.quantity = value;
      console.log(this.quantity)
    },
    changeActiveImg(i) {
      this.currentPhoto = this.product.imgURL[i];
    },
    addToCart() {
      //create obj
      const productObj = {}
      Object.assign(productObj, this.product)
      productObj.quantity = this.quantity;
      productObj.size = this.selectedSize;
      //crated obj set to vuex product cart
      this.$store.dispatch('setProduct', productObj);
    },
  },
};
</script>
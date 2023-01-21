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
          <div class="product-card__sizes">
            <div v-for="size in sizes" :key="size">
              <input
                type="radio"
                :name="size"
                :value="size"
                :id="size"
                v-model="selectedSize"
                @click="onChange(size)"
                :disabled="sizeDisabled(size)"
              />
              <label
                class="product-card__size"
                :disabled="sizeDisabled(size)"
                :class="{ 'product-card__size_selected': selectedSize == size }"
                :for="size"
                >{{ size }}</label
              >
            </div>
          </div>
        </div>
        <div class="product-card__quantity">
          <Number @quantityChange="quantityChange" />
        </div>
        <Buy @click="addToCart" :name="btnName" />
      </div>
      <div class="product-card__bottom-container">
        <h3 class="product-card__description-title">Description</h3>
        <div class="product-card__description">
          {{ product.description }}
        </div>
      </div>
    </div>
  </div>
  <el-alert title="success alert" type="success" />
</template>

<script>
/* eslint-disable */

import products from "@/seeders/products";
import sizes from "@/seeders/sizes";
import Number from "@/assets/components/UI/input_number.vue";
import Buy from "@/assets/components/UI/buy_btn.vue";

export default {
  components: { Number, Buy },
  data() {
    return {
      product: null,
      sizes,
      btnName: "Add to cart",
      currentPhoto: "",
      selectedSize: '',
      quantity: 1,
      popover: true,
    };
  },

  created() {
    const alias = this.$route.params.productAlias;
    const item = products.find((el) => el.alias === alias);

    if (item) {
      this.product = item;
      this.currentPhoto = item.imgURL[0];
      this.selectedSize = item.sizes[0]
    }
  },

  methods: {
    quantityChange(value) {
      this.quantity = value;
    },
    changeActiveImg(i) {
      this.currentPhoto = this.product.imgURL[i];
    },
    addToCart() {
      //create obj
      const productObj = {};
      Object.assign(productObj, this.product);
      productObj.quantity = this.quantity;
      productObj.size = this.selectedSize;
      //crated obj set to vuex product cart
      this.$store.dispatch("setProduct", productObj);
    },
    onChange(size) {
      this.selectedSize = size;
    },
    sizeDisabled(size) {
      if (this.product.sizes.find((elem) => elem == size)) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
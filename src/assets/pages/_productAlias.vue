<template>
  <div class="product-card">
    <div class="product-card__images">
      <div class="product-card__active-img">
        <img :src="currentPhoto || product.imgURL[0]" alt="" />
      </div>
      <div class="product-card__all-img" @click="changeActiveImg">
        <img :src="product.imgURL[0]" alt="" />
        <img :src="product.imgURL[1]" alt="" />
        <img :src="product.imgURL[2]" alt="" />
        <img v-if="product.imgURL[3]" :src="product.imgURL[3]" alt="" />
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
          <button class="product-card__delete" @click="deleteOne">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              class="product-card__quantity-icon"
            >
              <path
                d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
              ></path>
            </svg>
          </button>
          <div class="product-card__number">{{ quantity }}</div>
          <button class="product-card__add" @click="addOne">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              class="product-card__quantity-icon"
            >
              <path
                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
              ></path>
            </svg>
          </button>
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

export default {
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
    }
  },

  methods: {
    addOne() {
      if (this.quantity >= 0) {
        this.quantity += 1;
      }
    },
    deleteOne() {
      if (this.quantity >= 1) {
        this.quantity -= 1;
      }
    },
    changeActiveImg(event) {
      this.currentPhoto = event.target.src;
    },
    addToCart() {
      let arr = [];

      if(localStorage.getItem('cart')) {
        arr = (JSON.parse(localStorage.getItem('cart')));
      }

      const obj = this.createNewObject();

      arr.push(obj);
      
      console.log(obj.name);
      localStorage.setItem('cart', JSON.stringify(arr));
    },

    createNewObject() {
      const productObj = {};

      if (this.product) {
        for (const key in this.product) {
          productObj[key] = this.product[key];
        }
        productObj.quantity = this.quantity;
      }

      return productObj;
    }
  },
};
</script>
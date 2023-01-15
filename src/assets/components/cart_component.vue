<template>
  <div class="cart__container">
    <div class="cart__grid-elements">
      <div class="cart__items">
        <div class="cart__items-title">
          <h2 class="cart__items-title-text">Items in the cart:</h2>
          <span class="cart__items-title-quantity">{{ quantity }}</span>
        </div>
        <div class="cart__items-wrapper">
          <div class="cart__item" v-for="item in getItems" :key="item.id">
            <div class="cart__item-img">
              <img :src="item.imgURL[0]" alt="" />
            </div>
            <div class="cart__description">
              <div class="cart__name">{{ item.name }}</div>
              <div class="cart__about">
                <div class="cart__size">{{ item.size }}</div>
                <div class="cart__price">{{ item.price }} $</div>
                <div class="cart__quantity">
                  <Number :number="item.quantity"/>
                </div>
              </div>
              <button class="cart__delete-btn">Delete</button>
            </div>
            <div class="cart__item-total">
              <span>{{item.price * item.quantity}} $</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__buy">
        <div class="cart__buy-title">Total</div>
        <div class="cart__info">
          <div class="cart__products-amount">
            <span>Products amount:</span>
            <span>4141$</span>
          </div>
          <div class="cart__discount-amount">
            <span>Discount amount:</span>
            <span>10$</span>
          </div>
          <div class="cart__payable">
            <span>Payable:</span>
            <span>10000$</span>
          </div>
        </div>
        <button class="cart__buy-btn"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Number from '@/assets/components/UI/input_number.vue'

export default {
  components: {Number},
  data() {
    return {
      products: null,
    };
  },
  created() {},
  computed: {
    getItems() {
      return this.$store.getters.getCart;
    },
    quantity() {
      return this.$store.getters.getCartQuantity;
    },
  },
};
</script>
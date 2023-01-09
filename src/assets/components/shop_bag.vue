<template>
  <div class="cart__container">
    <div class="cart__content">
      <h2 class="cart__title">Cart</h2>
      <div class="cart__product-list">
        <div class="cart__product"></div>
      </div>
      <div class="cart__total">
        <div class="cart__total-title">Total</div>
        <div class="cart__total-price">34$</div>
      </div>
      <button>BUY</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  created(){
      if (localStorage.getItem("cart")) {
        let productArray = JSON.parse(localStorage.getItem("cart"));
        this.products = productArray;
      }
  },
};
</script>
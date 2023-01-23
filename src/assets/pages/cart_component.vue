<template>
  <div class="cart__container">
    <div class="cart__grid-elements">
      <div class="cart__items">
        <div class="cart__items-title">
          <h2 class="cart__items-title-text">Items in the cart:</h2>
          <span class="cart__items-title-quantity">{{ quantity }}</span>
        </div>
        <div class="cart__items-wrapper" v-if="getItems.length > 0">
          <div class="cart__item"  v-for="(item, index) in getItems" :key="item.id">
            <div class="cart__item-img">
              <img :src="item.imgURL[0]" alt="" />
            </div>
            <div class="cart__description">
              <div class="cart__name">{{ item.name }}</div>
              <div class="cart__about">
                <div class="cart__size">{{ item.size }}</div>
                <div class="cart__price">{{ item.price }} $</div>
                <div class="cart__quantity">
                  <Number :itemId="item.id" :itemSize="item.size" :number="item.quantity"/>
                </div>
              </div>
              <button class="cart__delete-btn" @click="deleteItem(index)">Delete</button>
            </div>
            <div class="cart__item-total">
              <span>{{item.price * item.quantity}} $</span>
            </div>
          </div>
        </div>
        <div class="cart__no-items" v-else>
          You have no items in your shopping cart 🙁
        </div>
      </div>
      <div class="cart__buy">
        <div class="cart__buy-title">Total</div>
        <div class="cart__info">
          <div class="cart__products-amount">
            <span>Products amount:</span>
            <span>{{getTotal}} $</span>
          </div>
          <div class="cart__discount-amount">
            <span>Discount amount:</span>
            <span>0 $</span>
          </div>
          <div class="cart__payable">
            <span>Payable:</span>
            <span>{{getTotal}} $</span>
          </div>
        </div>
        <Buy class="cart__btn-buy" :name="btnName"/>
      </div>
    </div>
  </div>
</template>

<script>
import Number from '@/assets/components/UI/input_number.vue'
import Buy from '@/assets/components/UI/buy_btn.vue';

export default {
  components: {Number, Buy},
  data() {
    return {
      products: null,
      btnName: 'Buy now',
    };
  },
  computed: {
    getItems() {
      return this.$store.getters.getCart;
    },
    quantity() {
      return this.$store.getters.getCartQuantity;
    },

    getTotal() {
      return this.$store.getters.getTotal ? this.$store.getters.getTotal : 0;
    }
  },
  methods: {
    quantityChange() {
      //
    },

    deleteItem(itemId){
      this.$store.dispatch('deleteProduct', itemId);
    }
  }
};
</script>
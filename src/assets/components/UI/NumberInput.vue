<template>
  <div class="quantity__container">
    <button class="quantity__btn" @click="deleteOne">-</button>
    <span class="quantity__input">{{ quantity }}</span>
    <button class="quantity__btn" @click="addOne">+</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 1,
    },
    itemId: {
      type: Number,
    },
    itemSize: {
      type: String,
    }
  },
  data() {
    return {
      quantity: this.number,
    };
  },
  watch: {
    quantity() {
      if (this.itemId && this.itemSize) {
        const quantityObject = {
          id: this.itemId,
          size: this.itemSize,
          quantity: this.quantity,
        };
        this.$store.dispatch("setQuantity", quantityObject);
      }
      this.$emit("quantityChange", this.quantity);
    },
  },
  methods: {
    addOne() {
      if (this.quantity >= 1 && this.quantity < 10) {
        this.quantity += 1;
      }
    },
    deleteOne() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    test() {
      console.log(214);
    },
  },
};
</script>
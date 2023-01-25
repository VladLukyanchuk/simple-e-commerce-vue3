<template>
  <div class="main__product-cart">
    <div class="main__product-image-container">
      <router-link :to="link">
        <img
        class="main__product-image"
        :src="imgURL[0]"
        alt=""
      />
      </router-link>
    </div>
    <div class="main__product-description">
      <span class="main__product-title">{{name}}</span>
      <div class="main__product-prices">
        <span class="main__product-price">{{price}}</span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        
        price: {
            type: String,
            required: true,
        },
        imgURL: {
            type: Array,
            required: true,
        },
        link: {
          type: String,
          required: true,
        }
    }
}
</script>
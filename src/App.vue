<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="main__content">
        <div class="main__products">
          <div class="main__product-cart">
            <a  class="main__product-image" href="">
              <img :src="require('./assets/images/cardigan#1/photo_2022-12-31_15-38-27.jpg')" alt="">
            </a>
            <div class="main__product-description">
              <span class="main__product-title"></span>
              <div class="main__product-prices">
                <span class="main__product-price"></span>
              </div>
            </div>
          </div>
          <div class="main_product-item">
            <a href="">
              <img :src="require('./assets/images/cardigan#2/photo_2022-12-31_15-38-35.jpg')" alt="">
            </a>
          </div>
          <div class="main_product-item">
            <a href="">
              <img :src="require('./assets/images/cardigan#3/photo_2022-12-31_15-38-19.jpg')" alt="">
            </a>
          </div>
          <div class="main_product-item">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
          <div class="main_product-item">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
          <div class="main_product-item">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
          <div class="main_product-item">
            <a href="">
              <img src="" alt="">
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './assets/components/header_component.vue';
export default {
  components: { Header },};
</script>

<style lang="scss">
</style>

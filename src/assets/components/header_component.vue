<template>
    <header class="header">
      <div class="header__content">
        <div class="header__left-side">
          <a href="" class="header__burger">
            <box-icon class="burger-icon" color="#101010" name="menu"></box-icon>
          </a>
        </div>
        <div class="header__center">
          <a href="/" class="header__logo">logo.</a>
        </div>

        <div class="header__right-side">
          <ul class="header__links">
            <li>
              <a href="/log-in" class="header__log-in"> Log In </a>
            </li>
          </ul>
          <shop_bag />
        </div>
      </div>
    </header>
</template>

<script>
import shop_bag from './UI/shop_bag.vue'
export default {
  components: { shop_bag },
    
}
</script>

<style lang="scss">

</style>
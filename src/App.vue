<template>
  <div class="wrapper">
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
          <a href="/shop-bag" class="shop-bag">
            <box-icon
              class="shop-bag__icon"
              color="#101010"
              name="shopping-bag"
            ></box-icon>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>

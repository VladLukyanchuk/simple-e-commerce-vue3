<template>
    <header class="header">
      <div class="header__content">
        <div class="header__left-side">
          <a href="" class="header__burger">
            <box-icon class="burger-icon" color="#101010" name="menu"></box-icon>
          </a>
        </div>
        <div class="header__center">
          <router-link to="/" class="header__logo">logo.</router-link>
        </div>

        <div class="header__right-side">
          <ul class="header__links">
            <li>
              <div v-if="getUser" class="header__user-container">
                <box-icon class="header__user" name='user'></box-icon>
                <span class="header__user-text">{{ getUser.name }}</span>
              </div>
              <router-link v-else to="/login" class="header__log-in" :class="{'header__active-link': this.activeLink === '/login' }" > Log In </router-link>
            </li>
          </ul>
          <router-link to="/cart_component"> 
            <shop_bag />
          </router-link>
        </div>
      </div>
    </header>
</template>

<script>
import shop_bag from '@/assets/components/UI/shop_bag.vue'

export default {
  components: { shop_bag,},
  data() {
    return {
      activeLink: '',
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser
    }
  },
  watch: {
    '$route'() {
      this.activeLink = this.$route.path
    }
  }
}
</script>

<style lang="scss">

</style>
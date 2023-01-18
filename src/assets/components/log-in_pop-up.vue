<template>
  <div class="pop-up">
    <router-view /> 
    <div class="pop-up__container">
      <ul class="pop-up__nav">
        <li
          class="pop-up__tab"
          :class="{ 'pop-up__tab_active': isLogIn }"
          @click="changeToLogin"
        >
          <a href="#" class="pop-up__log-in">Log In</a>
        </li>
        <li
          class="pop-up__tab"
          :class="{ 'pop-up__tab_active': isSignUp }"
          @click="changeToSign"
        >
          <a href="#" class="pop-up__sign-up">Sign Up</a>
        </li>
      </ul>
      <div class="pop-up__content">
        <h1 class="pop-up__title">
          <span v-if="isLogIn">Welcome Back!</span>
          <span v-else>Sign Up For Free</span>
        </h1>
        <form class="pop-up__form" @submit.prevent="onSubmit" @input="spanTransform" @change="checkInput">
          <div v-if="!isLogIn" class="pop-up__top-row">
            <div class="pop-up__input pop-up__first-name">
              <label> First Name<span class="req">*</span> </label>
              <input v-model="FormData.name" type="text" required autocomplete="off" />
            </div>

            <div class="pop-up__input pop-up__last-name">
              <label> Last Name<span class="req">*</span> </label>
              <input v-model="FormData.lastName" type="text" required autocomplete="off" />
            </div>
          </div>

          <div class="pop-up__input pop-up__email">
            <label> Email Address<span class="req">*</span> </label>
            <input v-model="FormData.email" type="email"  autocomplete="off" />
          </div>

          <div class="pop-up__input pop-up__password">
            <label> Set A Password<span class="req">*</span> </label>
            <input v-model="FormData.password" type="password"  autocomplete="off" />
          </div>

          <button type="submit" class="pop-up__submit">Get Started</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: { },

  data() {
    return {
      isLogIn: true,
      isSignUp: false,
      FormData: {
        name: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    changeToSign() {
      this.isLogIn = false;
      this.isSignUp = true;
    },
    changeToLogin() {
      this.isLogIn = true;
      this.isSignUp = false;
    },

    spanTransform(event) {
      if (event.target.value) {
        const label = event.target.previousSibling;
        label.classList.add("pop-up_active-label");
      }
    },
    checkInput(event) {
      if (!event.target.value) {
        const label = event.target.previousSibling;
        label.classList.remove("pop-up_active-label");
      }
    },
    onSubmit() {
      this.$store.dispatch('setUser', this.FormData)
    }
  },
};
</script>
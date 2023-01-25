<template>
  <div class="filter__wrapper" :class="{'filter__wrapper_active': active}">
    <div class="filter__container">
      <button @click="active = !active" class="filter__close-open" :class="{'filter__close-open_active': active}">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" ><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
      </button>
      
      <div class="filter__price-slider" :class="{'filter__price-slider_active': active}">
        <div class="filter__min-max">
          <span class="filter__min">Min: {{ priceValue[0] }} $</span>
          <span class="filter__max">Max: {{ priceValue[1] }}$</span>
        </div>
        <el-slider
          v-model="priceValue"
          placement="bottom"
          range
          show-input
          size="small"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      priceValue: [0, 100],
    };
  },
  watch: {
    priceValue(arr) {
      this.$emit("filterByPrice", arr);
    },
  },
  methods: {},
};
</script>


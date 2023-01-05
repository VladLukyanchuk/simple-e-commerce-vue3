<template>
    <div class="product-card">
        <div class="product-card__images">
            <div class="product-card__active-img"></div>
            <div class="product-card__all-img"></div>
        </div>
        <div class="product-card__info"></div>
    </div>
</template>

<script>
import products from '@/seeders/products'

export default {
    data () {
        return {
            product: null,
        }
    },

    created() {
        const alias = this.$route.params.productAlias;
        const item = products.find(el => el.alias === alias)

        if (item) {
            this.product = item;
        }
    }
}
</script>
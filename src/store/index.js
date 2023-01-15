import { createStore } from "vuex";

export const store = createStore({
    state: {
        cart: []
    },
    mutations: {
        setProduct(state, product) {
           state.cart.push(product);
        }
    },
    actions: {
        setProduct(context, product) {
            context.commit('setProduct', product);
        }
    },

    getters: {
        getCartQuantity(state) {
            return state.cart.length
        },
        getCart(state) {
            return state.cart
        }
    }
});

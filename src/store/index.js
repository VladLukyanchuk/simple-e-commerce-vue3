import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: null,
    cart: [],
  },
  mutations: {
    initializationStore(state) {

			if(localStorage.getItem('store')) {

				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},

    setProduct(state, product) {
      const findElement = state.cart.find(item => item.id === product.id);
      if (findElement && findElement.size === product.size) {
        findElement.quantity += product.quantity;
      } else {
        state.cart.push(product);
      }
    },

    deleteProduct(state, productId) {
        this.state.cart.splice(productId, 1);
    },

    setQuantity(state, quantityObj) {
      this.state.cart.forEach(element => {
        if (element.id === quantityObj.id && element.size === quantityObj.size) {
          element.quantity = quantityObj.quantity
        }
      });
    },

    setUser(state, user) {
      state.user = user;
      console.log(state.user);
    }
  },
  actions: {
    setProduct(context, product) {
      context.commit("setProduct", product);
    },

    deleteProduct(context, productId) {
        context.commit("deleteProduct", productId);
    },

    setQuantity(context, quantityObj) {
      context.commit("setQuantity", quantityObj);
    },

    setUser(context, user) {
      context.commit("setUser", user);
    }
  },

  getters: {
    getCartQuantity(state) {
      const productQuantity = state.cart.reduce((sum, elem) =>{
        return sum + elem.quantity
      }, 0)

      return productQuantity;
    },

    getCart(state) {
      return state.cart;
    },

    getTotal(state) {
      if (state.cart.length > 0) {
        let total = state.cart.reduce((sum, item) => {
          return sum + item.price * item.quantity;
        }, 0);
        console.log(total);
        return total;
      }
    },

    getUser(state) {
      return state.user
    }
  },
});

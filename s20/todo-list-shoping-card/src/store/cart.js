import axios from "axios";
import { useToast } from "vue-toast-notification";
import { BASE_URL } from '../constants';

const toast = useToast();

const cart = {
  namespaced: true,

  state: {
    cartItems: []
  },

  getters: {
    allCartItems(state) {
      return state.cartItems
    },
    getCartItemData: (state) => (itemId) => {
      return state.cartItems.find(x => x.id == itemId);
    },
    cartItemsCount(state) {
      return state.cartItems.length
    },
    totalCartPrice(state) {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += (item.value * item.price);
      });
      return total;
    }
  },

  mutations: {
    setCartItems(state, items) {
      state.cartItems = items;
    },

    addToCart(state, newItem) {
      state.cartItems.push(newItem);
    },

    updateCartItem(state, updatedItem) {
      const index = state.cartItems.findIndex(x => x.id === updatedItem.id);
      state.cartItems[index] = updatedItem;
    },

    deleteCartItem(state, itemId) {
      const index = state.cartItems.findIndex(x => x.id === itemId);
      state.cartItems.splice(index, 1);
      // toast.success('Task was deleted');
    }

  },

  actions: {

    async fetchCartItems({ commit }) {
      try {
        const { status, data } = await axios.get(`${BASE_URL}/cart_items`);
        if (status === 200) {
          commit('setCartItems', data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    },

    async addToCart({ state, commit, dispatch }, item) {

      const currentItem = state.cartItems.find(x => x.id === item.id);

      if (currentItem) {
        // edit mode
        item.value = currentItem.value + 1;
        dispatch('updateCartItem', item);
      } else {
        // add mode
        item.value = 1;
        try {
          const { status, data } = await axios.post(`${BASE_URL}/cart_items`, item);
          if (status === 201) {
            commit('addToCart', data);
          }
        } catch (err) {
          toast.error(err.message);
        }
      }


    },

    async updateCartItem({ commit }, item) {
      try {
        const { status, data } = await axios.put(`${BASE_URL}/cart_items/${item.id}`, item);
        if (status === 200) {
          commit('updateCartItem', data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    },

    async deleteCartItem({ commit }, itemId) {
      try {
        const { status, data } = await axios.delete(`${BASE_URL}/cart_items/${itemId}`);
        if (status === 200) {
          commit('deleteCartItem', itemId);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }

  }

}

export default cart
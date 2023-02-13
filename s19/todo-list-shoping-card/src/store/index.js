import { createStore } from "vuex";
import task from "./task";
import products from './products';
import cart from "./cart";

const store = createStore({
  modules: {
    task,
    products,
    cart
  }
});

export default store;
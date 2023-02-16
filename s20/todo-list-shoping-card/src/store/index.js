import { createStore } from "vuex";
import task from "./task";
import products from './products';
import cart from "./cart";
import auth from './auth';

const store = createStore({
  modules: {
    task,
    products,
    cart,
    auth
  }
});

export default store;
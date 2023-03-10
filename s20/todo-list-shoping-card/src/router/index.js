import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import { computed } from 'vue';
import store from './../store/index';

const isAuthenticated = computed(() => store.getters['auth/isAuthanticated']);

const router = createRouter({
   history: createWebHistory(),
   routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated.value) next({ name: 'login' })
  else next()
})

export default router;
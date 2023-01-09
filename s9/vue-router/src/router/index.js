import Home from "../components/Home.vue";
import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/aboutUs',
      name: 'about',
      component: AboutUs
   },
   {
      path: '/contactUs',
      name: 'contact',
      component: ContactUs
   }
];

const router = createRouter({
   history: createWebHashHistory(),
   routes
});

export default router;
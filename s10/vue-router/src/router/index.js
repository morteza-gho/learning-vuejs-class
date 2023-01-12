import Home from "../components/Home.vue";
import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";
import Users from "../components/users/Users.vue";
import User from "../components/users/User.vue";
import UserProfile from "../components/users/UserProfile.vue";
import UserImages from "../components/users/UserImages.vue";
import UserContactInfo from "../components/users/UserContactInfo.vue";
import {createRouter, createWebHistory} from "vue-router";

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
   },
   {
      path: '/Users',
      name: 'users',
      component: Users
   },
   {
      path: '/users/:id',
      name: 'showUser',
      component: User,
      redirect: {name: 'userProfile'},
      children: [
         {
            path: 'profile',
            name: 'userProfile',
            component: UserProfile
         },
         {
            path: 'images',
            name: 'userImages',
            component: UserImages
         },
         {
            path: 'contactInfo',
            name: 'userContactInfo',
            component: UserContactInfo
         }
      ]
   }
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   linkActiveClass: 'active',
   linkExactActiveClass: 'exactActive'
});

export default router;


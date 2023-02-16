
import AppWrapper from "../components/Global/AppWrapper.vue";

const routes = [
   { path: '/login', name: 'login', component: () => import('../components/login/Login.vue') },
   { path: '/', redirect: { name: 'home' } },
   {
      path: '/app', name: 'app', component: AppWrapper,
      children: [
         { path: 'home', name: 'home', component: () => import('../components/Home.vue') },
         { path: 'tasks', name: 'tasks', component: () => import('../components/tasks/Tasks.vue') },
         { path: 'products', name: 'products', component: () => import('../components/products/Products.vue') },
         { path: 'cart', name: 'cart', component: () => import('../components/cart/Cart.vue') },
         { path: 'products/:id', name: 'product', component: () => import('../components/products/ProductPage.vue') },
         { path: ':pathMatch(.*)*', name: 'notFound', component: () => import('../components/global/PageNotFound.vue') }
      ]
   },
   

];

export default routes
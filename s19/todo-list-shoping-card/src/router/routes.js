import Home from "../components/Home.vue";

const routes = [
   {path: '/', name: 'home', component: Home},
   {path: '/tasks', name: 'tasks', component: () => import('../components/tasks/Tasks.vue')},
   {path: '/products', name: 'products', component: () => import('../components/products/Products.vue')},
   {path: '/cart', name: 'cart', component: () => import('../components/cart/Cart.vue')},
   {path: '/products/:id', name: 'product', component: () => import('../components/products/ProductPage.vue')},
   {path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('../components/global/PageNotFound.vue')}
];

export default routes
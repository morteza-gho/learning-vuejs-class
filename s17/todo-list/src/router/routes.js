import Home from "../components/Home.vue";

const routes = [
   {path: '/', name: 'home', component: Home},
   {path: '/tasks', name: 'tasks', component: () => import('../components/tasks/Tasks.vue')},
   {path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('../components/global/PageNotFound.vue')}
];

export default routes
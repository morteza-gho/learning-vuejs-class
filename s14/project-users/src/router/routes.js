import Home from "../components/Home.vue";

const routes = [
   {path: '/', name: 'home', component: Home},
   {
      path: '/users', name: 'users', component: () => import('../components/users/Users.vue'),
      children: [
         {path: '', name: 'usersList', component: () => import('../components/users/UsersList.vue')},
         {path: ':id', redirect: {name: 'showUser'}},
         {path: ':id/show', name: 'showUser', component: () => import('../components/users/ShowUser.vue')},
         {path: ':id/edit', name: 'editUser', component: () => import('../components/users/EditUser.vue')},
      ]
   },
   {path: '/newUser', name: 'newUser', component: () => import('../components/users/NewUser.vue')},
   {path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('../components/global/PageNotFound.vue')}
];

export default routes
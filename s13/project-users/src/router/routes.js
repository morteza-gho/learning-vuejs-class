import Home from "../components/Home.vue";
import UsersList from "../components/users/UsersList.vue";
import PageNotFound from "../components/global/PageNotFound.vue";
import Users from "../components/users/Users.vue";
import NewUser from "../components/users/NewUser.vue";
import ShowUser from "../components/users/ShowUser.vue";
import EditUser from "../components/users/EditUser.vue";

const routes = [
   {path: '/', name: 'home', component: Home},
   {
      path: '/users', name: 'users', component: Users, children: [
         {path: '', name: 'usersList', component: UsersList},
         {path: ':id', redirect: {name: 'showUser'}},
         {path: ':id/show', name: 'showUser', component: ShowUser},
         {path: ':id/edit', name: 'editUser', component: EditUser},
      ]
   },
   {path: '/newUser', name: 'newUser', component: NewUser},

   {path: '/:pathMatch(.*)*', name: 'notFound', component: PageNotFound}
];

export default routes
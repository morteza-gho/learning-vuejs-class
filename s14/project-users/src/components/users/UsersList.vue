<template>

   <div class="d-flex justify-content-between align-items-center border-bottom mb-4">
      <h1><i class="bi bi-people"></i> Users List</h1>
      <router-link :to="{name: 'newUser'}" class="btn btn-primary">
         <i class="bi bi-plus-lg"></i> New User
      </router-link>
   </div>

   <main-loading v-if="isLoading"></main-loading>

   <table class="table table-bordered table-striped table-hover" v-else>
      <thead>
      <tr>
         <th class="text-center">Row</th>
         <th>Name - Family</th>
         <th>Username</th>
         <th>Email</th>
         <th>Phone</th>
         <th class="text-center">Action</th>
      </tr>
      </thead>
      <tbody v-if="users.length">
      <tr v-for="(user, index) in users" :key="user.id">
         <td class="text-center">{{index + 1}}</td>
         <td>
            <router-link class="text-decoration-none text-black" :to="{name: 'showUser', params: {id: user.id}}">
               {{user.full_name}}
            </router-link>
         </td>
         <td>{{user.username}}</td>
         <td>{{user.email}}</td>
         <td>{{user.phone}}</td>
         <td class="text-center">
            <table-actions :id="user.id" @table-action-callback="onTableActionCallback"></table-actions>
         </td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr>
         <td colspan="6">
            <not-found-items text="Users Not Found!"></not-found-items>
         </td>
      </tr>
      </tbody>
   </table>
</template>

<script>
   import axios from "axios";
   import {BASE_URL} from "../../constants";
   import MainLoading from "../global/MainLoading.vue";
   import NotFoundItems from "../global/NotFoundItems.vue";
   import TableActions from "../global/TableActions.vue";
   import {ref, onMounted} from "vue";
   import {useToast} from "vue-toast-notification";
   import {useRouter} from "vue-router";

   export default {
      name: "UsersList",
      components: {TableActions, NotFoundItems, MainLoading},

      setup() {
         const isLoading = ref(false);
         const isDisabled = ref(false);
         const users = ref([]);
         const $toast = useToast();
         const router = useRouter();

         onMounted(() => {
            getUsers();
         })

         const getUsers = () => {
            isLoading.value = true;
            axios.get(`${BASE_URL}/users`).then(res => {
               isLoading.value = false;
               users.value = res.data
            }, (err) => {
               isLoading.value = false;
            })
         };

         const deleteUser = (userId) => {
            if (window.confirm('Are you sure to delete this user')) {
               isDisabled.value = true;
               axios.delete(`${BASE_URL}/users/${userId}`).then(() => {
                  isDisabled.value = false;
                  const userIndex = users.value.findIndex(x => x.id === userId);
                  users.value.splice(userIndex, 1);
                  $toast.success('User Deleted Successfully')
               }, (err) => {
                  isDisabled.value = false;
                  $toast.error(err.message);
               })
            }
         };

         const onTableActionCallback = (data) => {
            switch (data.type) {
               case 'delete': {
                  deleteUser(data.id)
               }
                  break;
               case 'edit': {
                  router.push({name: 'editUser', params: {id: data.id}})
               }
                  break;
               case 'show': {
                  router.push({name: 'showUser', params: {id: data.id}})
               }
                  break;
            }
         }

         return {isLoading, isDisabled, users, deleteUser, onTableActionCallback}

      } // setup

   }
</script>

<style scoped>

</style>
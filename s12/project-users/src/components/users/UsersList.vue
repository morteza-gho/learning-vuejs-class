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
            <router-link class="text-decoration-none text-black" :to="{name: 'showUser', params: {id: user.id}}">{{user.full_name}}</router-link>
         </td>
         <td>{{user.username}}</td>
         <td>{{user.email}}</td>
         <td>{{user.phone}}</td>
         <td class="text-center">
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
               <router-link :to="{name: 'showUser', params: {id: user.id}}" class="btn btn-outline-secondary" title="show">
                  <i class="bi bi-eye"></i>
               </router-link>
               <router-link :to="{name: 'editUser', params: {id: user.id}}" class="btn btn-outline-primary" title="edit">
                  <i class="bi bi-pencil"></i>
               </router-link>
               <button type="button" class="btn btn-outline-danger" :disabled="isDisabled" @click="deleteUser(user.id)" title="delete">
                  <i class="bi bi-trash"></i>
               </button>
            </div>
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

   export default {
      name: "UsersList",
      components: {NotFoundItems, MainLoading},
      data() {
         return {
            isLoading: false,
            isDisabled: false,
            users: []
         }
      },
      mounted() {
         this.getUsers();
      },
      methods: {
         getUsers() {
            this.isLoading = true;
            axios.get(`${BASE_URL}/users`).then(res => {
               this.isLoading = false;
               this.users = res.data
            }, (err) => {
               this.isLoading = false;
               console.log(err.message)
            })
         },

         deleteUser(userId) {
            if (window.confirm('Are you sure to delete this user')) {
               this.isDisabled = true;
               axios.delete(`${BASE_URL}/users/${userId}`).then(res => {
                  this.isDisabled = false;
                  const userIndex = this.users.findIndex(x => x.id === userId);
                  this.users.splice(userIndex, 1);
                  this.$toast.success('User Deleted Successfully')
               }, (err) => {
                  this.isDisabled = false;
                  this.$toast.error(err.message);
               })
            }
         }
      }, // methods

   }
</script>

<style scoped>

</style>
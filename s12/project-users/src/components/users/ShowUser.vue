<template>

   <main-loading v-if="isLoading"></main-loading>

   <div v-else>

      <div class="d-flex justify-content-between align-items-center border-bottom mb-4">
         <h1><i class="bi bi-person"></i> {{userData.full_name}}</h1>
         <div>
            <router-link :to="{name: 'usersList'}" class="btn btn-secondary me-2">
               <i class="bi bi-arrow-left"></i> Back
            </router-link>
            <router-link :to="{name: 'editUser', params: {id: userData.id}}" class="btn btn-primary">
               <i class="bi bi-pencil"></i> Edit
            </router-link>
         </div>

      </div>

      <div class="fs-5">
         <p class="mb-3">
            <span class="text-muted me-2"><i class="bi bi-person"></i> Name:</span>
            <b>{{userData.full_name}}</b>
         </p>
         <p class="mb-3">
            <span class="text-muted me-2"><i class="bi bi-person-lock"></i> Username:</span>
            <b>{{userData.username}}</b>
         </p>
         <p class="mb-3">
            <span class="text-muted me-2"><i class="bi bi-envelope"></i> Email:</span>
            <b>{{userData.email}}</b>
         </p>
         <p class="mb-3">
            <span class="text-muted me-2"><i class="bi bi-phone-vibrate"></i> Phone:</span>
            <b>{{userData.phone}}</b>
         </p>
         <p class="mb-3">
            <span class="text-muted me-2"><i class="bi bi-pin-map"></i> Address:</span>
            <b>{{userData.address}}</b>
         </p>
      </div>

   </div>


</template>

<script>
   import axios from "axios";
   import {BASE_URL} from "../../constants";
   import MainLoading from "../global/MainLoading.vue";

   export default {
      name: "ShowUser",
      components: {MainLoading},
      data() {
         return {
            isLoading: false,
            userData: {}
         }
      },
      created() {
         this.userId = this.$route.params.id;
         this.getData();
      },
      methods: {

         getData() {
            this.isLoading = true;
            axios.get(`${BASE_URL}/users/${this.userId}`).then(res => {
               this.isLoading = false;
               this.userData = res.data;
            }, (err) => {
               this.isLoading = false;
               this.$toast.error(err.message)
            })
         }
      }
   }
</script>

<style scoped>

</style>
<template>

   <main-loading v-if="isLoading"></main-loading>

   <div v-else-if="userData">

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
   import {onMounted, ref} from "vue";
   import {useToast} from "vue-toast-notification";
   import {useRoute} from "vue-router";

   export default {
      name: "ShowUser",
      components: {MainLoading},

      setup() {
         const isLoading = ref(false);
         const userData = ref(null);
         const route = useRoute();
         const $toast = useToast();

         onMounted(() => {
            getData();
         });

         const getData = () => {
            isLoading.value = true;
            axios.get(`${BASE_URL}/users/${route.params.id}`).then(res => {
               isLoading.value = false;
               userData.value = res.data;
            }, (err) => {
               isLoading.value = false;
               $toast.error(err.message)
            })
         }

         return {isLoading, userData}
      }
   }
</script>

<style scoped>

</style>
<template>

   <div class="d-flex justify-content-between align-items-center border-bottom mb-4">
      <h1><i class="bi bi-person-plus"></i> New User</h1>
      <router-link :to="{name: 'usersList'}" class="btn btn-secondary">
         <i class="bi bi-arrow-left"></i> Back
      </router-link>
   </div>

   <div class="col-md-6 col-12">
      <form @submit.prevent="submit">
         <div class="row">
            <div class="col-md-6">
               <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="createModel.username"
                         placeholder="Enter your username...">
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label for="name" class="form-label">Name - Family</label>
                  <input type="text" class="form-control" id="name" v-model="createModel.full_name"
                         placeholder="Enter your name and family...">
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="createModel.email"
                         placeholder="Enter your email...">
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input type="text" class="form-control" id="phone" v-model="createModel.phone"
                         placeholder="Enter your phone...">
               </div>
            </div>
         </div>
         <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea rows="3" class="form-control" id="address" v-model="createModel.address"
                      placeholder="Enter your address..."></textarea>
         </div>

         <button type="submit" class="btn btn-success" :disabled="isDisabled">
            <i class="bi bi-check-lg me-2" v-if="!isDisabled"></i>
            <span v-else class="spinner-border spinner-border-sm me-2"></span>
            Update
         </button>

      </form>
   </div>

</template>

<script>
   import axios from "axios";
   import {BASE_URL} from "../../constants";

   export default {
      name: "EditUser",
      data() {
         return {
            userId: null,
            isDisabled: false,
            createModel: {}
         }
      },
      created() {
         this.userId = this.$route.params.id;
         this.getData();
      },
      methods: {

         getData() {
            axios.get(`${BASE_URL}/users/${this.userId}`).then(res => {
               this.createModel = res.data;
            }, (err) => {
               this.$toast.error(err.message)
            })
         },

         submit() {
            this.isDisabled = true;
            const dataModel = this.createModel;
            axios.put(`${BASE_URL}/users/${this.userId}`, dataModel).then(() => {
               this.isDisabled = false;
               this.$toast.success('User Updated Successfully')
               this.$router.push("/users");
            }, (err) => {
               this.isDisabled = false;
               this.$toast.error(err.message)
            })
         }
      }
   }
</script>

<style scoped>

</style>
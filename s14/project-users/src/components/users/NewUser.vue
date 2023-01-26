<template>

   <div class="d-flex justify-content-between align-items-center border-bottom mb-4">
      <h1><i class="bi bi-person-plus"></i> New User</h1>
      <router-link :to="{ name: 'usersList' }" class="btn btn-secondary">
         <i class="bi bi-arrow-left"></i> Back
      </router-link>
   </div>

   <div class="col-md-6 col-12 mb-5">
      <Form @submit="onSubmit" :validation-schema="userSchema">
         <div class="row">
            <div class="col-md-6">
               <div class="mb-3">
                  <label class="form-label">Username</label>
                  <Field class="form-control" name="username" placeholder="Enter your username..." />
                  <ErrorMessage name="username" class="text-danger" />
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label class="form-label">Name - Family</label>
                  <Field class="form-control" name="full_name" placeholder="Enter your name and family..." />
                  <ErrorMessage name="full_name" class="text-danger" />
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label class="form-label">Email</label>
                  <!-- :rules="validateEmail" -->
                  <Field class="form-control" name="email" type="email" placeholder="Enter your email..." />
                  <ErrorMessage name="email" class="text-danger" />
               </div>
            </div>
            <div class="col-md-6">
               <div class="mb-3">
                  <label class="form-label">Phone</label>
                  <Field class="form-control" name="phone" placeholder="Enter your phone..." />
                  <ErrorMessage name="phone" class="text-danger" />
               </div>
            </div>
         </div>
         <div class="mb-3">
            <label class="form-label">Website</label>
            <Field class="form-control" name="website" placeholder="Enter your website..." />
            <ErrorMessage name="website" class="text-danger" />
         </div>
         <div class="mb-3">
            <label class="form-label">Address</label>
            <Field class="form-control" name="address" placeholder="Enter your address..." />
            <ErrorMessage name="address" class="text-danger" />
         </div>

         <form-button text="Register" button-type="submit" classes="btn-success" icon="bi-check2"
           :is-disabled="isDisabled" action-type="submit" @button-callback="onButtonCallback">
         </form-button>

         <!--<form-button
               text="Reset Form"
               classes="btn-outline-secondary ms-2"
               icon="bi-x-lg"
               :is-disabled="isDisabled"
               action-type="reset"
               @button-callback="onButtonCallback">
         </form-button>-->

      </Form>
   </div>

</template>

<script setup>
import axios from "axios";
import { BASE_URL } from "../../constants";
import { createGUID } from "../../functions";
import FormButton from "../global/FormButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate"
import { userSchema } from "./schemas/schemas";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import { useRouter } from "vue-router";

const isDisabled = ref(false);
const createModel = ref({});
const $toast = useToast();
const router = useRouter();

const onSubmit = (values) => {
   if (values) {
      isDisabled.value = true;
      const dataModel = values;
      Object.assign(dataModel, { id: createGUID() });
      axios.post(`${BASE_URL}/users`, dataModel).then(() => {
         isDisabled.value = false;
         $toast.success('User Added Successfully')
         router.push("/users");
      }, (err) => {
         isDisabled.value = false;
         $toast.error(err.message)
      })
   }
}

const onButtonCallback = ({ type }) => {
   switch (type) {
      case 'submit': {
         onSubmit()
      }
         break
      case 'reset': {
         createModel.value = {}
      }
         break;
   }
}


/* export default {
   name: "NewUser",
   components: {FormButton, Form, Field, ErrorMessage},

   setup() {
      const isDisabled = ref(false);
      const createModel = ref({});
      const $toast = useToast();
      const router = useRouter();

      const onSubmit = (values) => {
         if (values) {
            isDisabled.value = true;
            const dataModel = values;
            Object.assign(dataModel, {id: createGUID()});
            axios.post(`${BASE_URL}/users`, dataModel).then(() => {
               isDisabled.value = false;
               $toast.success('User Added Successfully')
               router.push("/users");
            }, (err) => {
               isDisabled.value = false;
               $toast.error(err.message)
            })
         }
      }

      const onButtonCallback = ({type}) => {
         switch (type) {
            case 'submit': {
               onSubmit()
            }
               break
            case 'reset': {
               createModel.value = {}
            }
               break;
         }
      }

      return {isDisabled, onSubmit, onButtonCallback, userSchema}
   }

} */
</script>

<style scoped>

</style>
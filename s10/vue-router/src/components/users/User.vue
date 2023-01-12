<template>
   <h1>{{user.name}}</h1>
   <h2>{{user.email}}</h2>
   <router-link :to="{name: 'userProfile', params: {id: userId}}" class="user-link">Profile</router-link>
   <router-link :to="{name: 'userImages', params: {id: userId}}" class="user-link">Images</router-link>
   <router-link :to="{name: 'userContactInfo', params: {id: userId}}" class="user-link">Contact</router-link>

   <router-view></router-view>

   <button type="button" @click="back">Back To Users List</button>

</template>

<script>
   import axios from 'axios';

   export default {
      name: "user",
      data() {
         return {
            userId: '',
            user: {}
         }
      },
      created() {
         // console.log(this.$route.params);
         this.userId = this.$route.params.id;
         axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).then(res => {
            if (res.status === 200) {
               this.user = res.data;
            }
         }, (err) => {
            console.log(err.response);
         })
      },
      methods: {
         back() {
            this.$router.push({name: 'users', query: {name: 'Morteza'}})
            // this.$router.push('/users')
         }
      }
   }
</script>

<style scoped>
   .user-link {
      padding: 3px 10px;
      background: darkblue;
      color: #FFF;
      border-radius: 3px;
      margin-right: 5px;
   }
</style>
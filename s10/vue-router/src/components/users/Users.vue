<template>
   <ul>
      <li v-for="user in users" :key="user.id">
         <router-link :to="{name: 'showUser', params: {id: user.id}}">{{user.name}}</router-link>
      </li>
   </ul>
</template>

<script>
   import axios from 'axios';
   export default {
      name: "Users",
      data() {
         return {
            /*users: [
               {id: 1, name: 'Ali', family: 'Chenini Noshabadi'},
               {id: 2, name: 'Mojtaba', family: 'Fallah Qomi'},
               {id: 3, name: 'Fatemeh', family: 'Fallah Barzoki'},
            ]*/
            users: []
         }
      },
      created() {
         axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res.data);
            this.users = res.data;
         })
      }
   }
</script>

<style scoped>
   ul li {
      margin-bottom: 10px;
   }
   ul li a {
      color: #333;
      text-decoration: none;
   }
   ul li a:hover {
      color: red;
   }
</style>
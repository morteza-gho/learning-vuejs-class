<template>
   <h1>Show User: {{userId}}</h1>
   <router-link :to="{name: 'userProfile', params: {id: userId}}" class="user-link">Profile</router-link>
   <router-link :to="{name: 'userImages', params: {id: userId}}" class="user-link">Images</router-link>
   <router-link :to="{name: 'userContactInfo', params: {id: userId}}" class="user-link">Contact</router-link>

   <router-view></router-view>

   <button type="button" @click="back">Back To Users List</button>

</template>

<script>
   export default {
      name: "user",
      data() {
         return {
            userId: ''
         }
      },
      created() {
         // console.log(this.$route.params);
         this.userId = this.$route.params.id
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
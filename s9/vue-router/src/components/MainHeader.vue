<template>
   <header>
      <nav>
         <ul>
            <li><router-link to="/">Home</router-link></li>
            <!--<li><router-link to="aboutUs">About Us</router-link></li>-->
            <li><router-link :to="{name: 'about'}">About Us</router-link></li>
            <li><router-link to="contactUs">Contact Us</router-link></li>
         </ul>
      </nav>
   </header>
</template>

<script>
   export default {

   }
</script>


<style>
   ul {
      display: flex;
      padding-bottom: 15px;
      margin-bottom: 30px;
      border-bottom: 2px solid #CCC;
      padding-left: 0;
   }
   li {
      list-style-type: none;
      margin-right: 10px;
   }
   a {
      background: #555;
      color: #FFF;
      padding: 5px 10px;
      text-decoration: none;
      border-radius: 3px;
   }
   a:hover {
      background: #333;
   }
</style>
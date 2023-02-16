<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card p-5 w-50 text-center">
      <h1 class="mb-5">Login To Site</h1>
      <button class="btn btn-lg btn-dark" @click="login">Login</button>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const login = async () => {
  await store.dispatch('auth/login', 'TestToken');
  router.push({name: 'home'});
}

</script>
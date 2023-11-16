<script>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  import logo from '../assets/CamCorLogo.webp';

  export default {
    components: {},
    setup() {
      const users = ref([]);
      const searchQuery = ref('');
  
      onMounted(async () => {
        const response = await axios.get("https://dummyapi.io/data/v1/user", {
          headers: {
            "app-id": "655437a4632a7a5b85458dd0",
          },
        });
  
        const responseData = response.data;
        users.value = responseData.data;
      });

      const filteredUsers = computed(() => {
        if (!searchQuery.value) {
          return users.value;
        }
        return users.value.filter(user => {
          return user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase());
        });
      });

      return { users, searchQuery, filteredUsers, logo };
    }
  };
</script>


<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-4 border-8 border-solid border-black">
      <img :src="logo" alt="banner" class="w-30 h-36 object-cover ">
      <input type="text" v-model="searchQuery" placeholder="Buscar usuario por nombre" class="rounded-lg px-4 py-2 mb-4 w-full max-w-md mx-auto m-4 border-4 border-solid border-black" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link :to="{ name: 'users', params: { id: user.id } }" v-for="user in filteredUsers" :key="user.id" class="bg-white rounded-lg shadow p-4 border-6 border-solid border-black transition duration-500 ease-in-out transform hover:bg-blue-500 hover:text-white cursor-pointer">
          <img :src="user.picture" :alt="`${user.firstName} ${user.lastName}`" class="rounded-full w-16 h-16 mx-auto mb-2">
          <h2 class="text-xl font-bold text-center mb-2">{{ user.firstName }} {{ user.lastName }}</h2>
          <p class="text-center">Ver perfil</p>
        </router-link>
      </div>
    </div>
  </div>
 </template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
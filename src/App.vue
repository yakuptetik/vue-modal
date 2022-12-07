<script setup >
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import { useModalStore } from './store/post'
const store = useModalStore();


</script>

<template>
<button  @click="store.append({ component: 'Login', name: 'arda', data: { a: 1}})" class="text-white focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 m-3"> add Modal</button>
 <div class="flex items-center justify-center">
 </div>

<div   v-for="modal in store.modals" class="flex w-screen  justify-center pt-12">
  <Login v-if="modal.component === 'Login'" />
  <Register v-if="modal.component === 'Register'" />  
 </div>
 
</template>



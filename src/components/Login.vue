<script setup>
import { useModalStore } from '../store/post'
const store = useModalStore();
</script>

<template>
<div>
  <div class="flex items-center gap-4 pb-1 w-full  text-sm">
      <button class="px-1 rounded text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-white" @click="store.destroyAll()">delete all</button>
      <button class="px-1 rounded text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-white" @click="store.destroy()">delete</button>
  </div>
  <form class="w-96 h-72  rounded-lg bg-gray-300 p-4">
    <div class="mb-6">
      <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
      <input type="password" id="password1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email..." >
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="*******************" >
    </div>
    <button @click="store.append()" type="submit" class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
</form>
</div>

       
</template>

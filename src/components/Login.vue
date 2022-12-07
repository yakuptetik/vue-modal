<script setup>
import { useModalStore } from '../store/post'
const store = useModalStore();
</script>

<template>
     <div class="w-96 h-72 rounded-lg bg-gray-300 p-4">
        <div class="mb-6">
          <div class="uppercase text-3xl ">lm</div>
          <div class="flex items-center">lkmlk</div>


        </div>
        <div class="flex gap-4">
            <button @click="store.destroyAll()">delete all</button>
            <button @click="store.destroy()">delete</button>
         </div>
         <button  @click="" class="text-3xl">
          register
         </button>
        </div>
       
</template>

<script setup>
import { useModalStore } from '../store/post'
const store = useModalStore();
const modal = {
  name: "arda",
  component: 'Register'

}
</script>

<template>
     <div class="w-96 h-72 rounded-lg bg-gray-300 p-4">
        <div class="mb-6">
          <div class="uppercase text-3xl ">{{modal.component}}</div>
          <div class="flex items-center">{{modal.name}}</div>


        </div>
        <div class="flex gap-4">
            <button @click="store.destroyAll()">delete all</button>
            <button @click="store.destroy()">delete</button>
         </div>
        </div>
</template>

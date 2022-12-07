import { defineStore } from "pinia"
import { ref } from "vue"


export const useModalStore = defineStore('modalCombat', () => {
  const modals = ref([]);

  function append(payload) {
    modals.value.push(payload)
  }

  function destroy() {
    modals.value.pop()
  }

  function destroyAll() {
    modals.value = [];
  }

  return{modals,append,destroy,destroyAll}
})



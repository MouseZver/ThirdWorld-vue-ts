// src\stores\appStore.ts
import { reactive } from 'vue'

const _store = reactive({
  isLoadingRoutes: true,

  finishLoadingRoutes() {
    this.isLoadingRoutes = false
  }
})

export const useAppStore = () => _store
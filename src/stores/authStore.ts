// src\stores\authStore.ts
import { reactive } from 'vue'

const _store = reactive({
  isAuthenticated: false,

  login() {
    this.isAuthenticated = true
  },
  logout() {
    this.isAuthenticated = false
  }
})
// Простой стор для примера
export const useAuthStore = () => _store
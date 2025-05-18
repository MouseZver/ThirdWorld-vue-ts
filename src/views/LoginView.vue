<template>
  <div>
    <h1>Страница авторизации</h1>
    <p>Введите логин и пароль для входа.</p>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Логин" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  // Здесь можно сделать реальную проверку
  if (username.value && password.value) {
    //console.log('auth')
    auth.login()
    router.push({ name: 'castle' })
  }
}
</script>
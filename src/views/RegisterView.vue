<template>
  <div>
    <h1>Регистрация</h1>
    <form @submit.prevent="register">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const register = () => {
  // Здесь можно отправить данные на сервер
  alert('Вы зарегистрированы!')
  router.push('/')
}
</script>
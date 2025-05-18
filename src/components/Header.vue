<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Мир Замка</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/register">Регистрация</router-link></li>
        <li><router-link to="/castle">Замок</router-link></li>
        <li><router-link to="/lands">Земли</router-link></li>
        <li><router-link to="/world">Мир</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Можно добавить логику, если нужно (например, выпадающее меню на мобильных)
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  color: white;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #1abc9c;
}
</style>
<template>
  <div class="layout">
    <!-- Основной контент страницы -->
    <slot />

    <!-- Кнопка слева снизу -->
    <div class="button left-bottom">
      <button @click="$router.push('/')">Главная</button>
    </div>

    <!-- Кнопка справа снизу -->
    <div class="button right-bottom">
      <button @click="onRightButtonClick">Действие</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseLayout'
}
</script>

<script setup lang="ts">
// Можно передавать пропсы или использовать emit, если нужно
const onRightButtonClick = () => {
  alert('Кнопка справа снизу нажата')
}

</script>

<style scoped>
.layout {
  position: relative;
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;
}

.button {
  position: fixed;
  bottom: 20px;
  z-index: 100;
}

.left-bottom {
  left: 20px;
}

.right-bottom {
  right: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
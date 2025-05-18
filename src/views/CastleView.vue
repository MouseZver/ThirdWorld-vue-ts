<template>
	<BaseLayout>
		<div>
			<h1>Замок</h1>
			<div v-if="loading">Загрузка данных...</div>
			<div v-else-if="error">{{ error }}</div>
			<pre v-else>{{ data }}</pre>
		</div>
	</BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import { ref, onMounted } from 'vue'

interface ServerData {
  id: number
  name: string
  description: string
}

const loading = ref(true)
const error = ref<string | null>(null)
const data = ref<ServerData | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('http://test/castle') // Пример REST API
    if (!response.ok) throw new Error('Ошибка сети или сервера')
    data.value = await response.json()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Неизвестная ошибка'
  } finally {
    loading.value = false
  }
})
</script>
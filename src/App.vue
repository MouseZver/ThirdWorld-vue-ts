<template>
  <div v-if="isLoadingRoutes" class="loading-wrapper">
    <LoadingScreen />
  </div>
  <div v-else>
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Header from '@/components/Header.vue'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()
const isLoadingRoutes = computed(() => appStore.isLoadingRoutes)
</script>
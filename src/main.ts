// src\main.ts
import '@/types/routeMeta'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { useAppStore } from '@/stores/appStore'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Подключение лоадера
const appStore = useAppStore()

// Маппинг названия компонента на его асинхронную загрузку
const viewMap: Record<string, () => Promise<unknown>> = {
  //HomeView: () => import('@/views/HomeView.vue'),
  RegisterView: () => import('@/views/RegisterView.vue'),
  LoginView: () => import('@/views/LoginView.vue'),
  CastleView: () => import('@/views/CastleView.vue'),
  LandsView: () => import('@/views/LandsView.vue'),
  WorldView: () => import('@/views/WorldView.vue')
}

// Функция для безопасного получения компонента
function getViewComponent(name: string) {
  const loader = viewMap[name]
  if (!loader) {
	console.warn(`Компонент "${name}" не найден. Используется fallback: LoginView`)
	return viewMap['LoginView']
  }
  return loader
}

// Асинхронная загрузка маршрутов с сервера
async function loadRoutesFromServer() {
	try {
		const response = await fetch('/src/assets/mock-routes.json')
        //console.table(response)
		if (!response.ok) throw new Error('Ошибка загрузки маршрутов')

		const routesFromServer = await response.json()
        
        

		routesFromServer.forEach((route: any) => {
            router.addRoute({
                path: route.path,
                name: route.name,
                component: getViewComponent(route.component),
                meta: route.meta || {}
            })
        })
        
        appStore.finishLoadingRoutes()
    } 
    catch (err) 
    {
        console.error(err)
    }
    
    
    
    router.push(window.location.pathname).catch(() => {})
}

/* watch(
  () => appStore.isLoadingRoutes,
  async (newVal) => {
    if (!newVal) {
      // Как только маршруты загружены — переходим на главную
      await router.push('/')
    }
  }
) */

// Запуск загрузки маршрутов
loadRoutesFromServer()
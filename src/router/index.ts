// src\router\index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useAppStore } from '@/stores/appStore'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'fallback',
            component: () => import('@/components/LoadingScreen.vue')
        }
	]
})

const appStore = useAppStore()
const authStore = useAuthStore()


// Глобальный навигационный хук
router.beforeEach((to, from, next) => {
    if (appStore.isLoadingRoutes) {
        next(false)
        return
    }

    // После загрузки маршрутов проверяем существование
    const matchedRoute = router.getRoutes().find(route => route.path === to.path)
    
    if ( !matchedRoute && to.path !== '/')
    {
        next({ name: 'castle' })
        return
    }
    
    // Защита маршрутов через авторизацию
    if (!authStore.isAuthenticated && to.matched.some(record => record.meta.requiresAuth)) {
        next({ name: 'login' })
        return
    }
    
    // Защита: если маршрут только для гостей, а юзер уже авторизован
    if (authStore.isAuthenticated && to.matched.some(record => record.meta.guestOnly)) {
        next({ name: 'castle' })
        return
    }

    next()
})

export default router
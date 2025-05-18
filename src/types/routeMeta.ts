// src/types/routeMeta.ts

import 'vue-router'
// Расширяем стандартный тип меты из Vue Router
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Требуется ли авторизация для доступа к маршруту
     */
    requiresAuth?: boolean

    /**
     * Только для гостей (неавторизованных)
     */
    guestOnly?: boolean
  }
}
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        // Static Route
        {
            path: '/',
            name: 'UnderContruction',
            component: () => import('@/views/UnderConstruction.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 50,
                behavior: 'smooth'
            }
        }
    },
})

export default router
import {createRouter,createWebHistory} from "vue-router"



const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/book-info',
        component: () => import('@/pages/BookInfoPage.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

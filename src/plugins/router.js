import {createRouter,createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage.vue";
import BookInfoPage from "@/pages/BookInfoPage.vue";



const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/book-info',
        component: () => import('@/pages/BookInfoPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

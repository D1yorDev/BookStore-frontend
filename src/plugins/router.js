import {createRouter, createWebHistory} from "vue-router"


const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/categories/:id',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/book-info/:bookId',
        component: () => import('@/pages/BookInfoPage.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        path: '/register',
        component: () => import('@/pages/RegisterPage.vue')
    },
    {
        path: '/create-category',
        component: () => import('@/pages/CreateCategory.vue')
    },
    {
        path: '/create-book',
        component: () => import('@/pages/CreateBook.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})

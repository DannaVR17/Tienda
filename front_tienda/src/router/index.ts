import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import Read from '@/views/tienda/Ropa/Read.vue'
import Home from '@/views/Home.vue'
import Update from '@/views/tienda/Ropa/Update.vue'
import Delete from '@/views/tienda/Ropa/Delete.vue'
import Create from '@/views/tienda/Ropa/Create.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {path: '/home', component: Home },
    { path: '/ropa', component: Read },
    { path: '/ropa/create', component: Create },
    { path: '/ropa/update/:id', component: Update, props: true },
    { path: '/ropa/delete/:id', component: Delete, props: true },
  ],
})

export default router

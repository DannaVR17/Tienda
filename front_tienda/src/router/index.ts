import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import Read from '@/views/tienda/Ropa/Read.vue'
import Home from '@/views/Home.vue'
import Update from '@/views/tienda/Ropa/Update.vue'
import Delete from '@/views/tienda/Ropa/Delete.vue'
import Create from '@/views/tienda/Ropa/Create.vue'
import MascotasRead from '@/views/tienda/Mascotas/MascotasRead.vue'
import MascotasUpdate from '@/views/tienda/Mascotas/MascotasUpdate.vue'
import MascotasDelete from '@/views/tienda/Mascotas/MascotasDelete.vue'
import MascotasCreate from '@/views/tienda/Mascotas/MascotasCreate.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {path: '/home', component: Home },
    { path: '/ropa', component: Read },
    { path: '/ropa/create', component: Create },
    { path: '/ropa/update/:id', component: Update, props: true },
    { path: '/ropa/delete/:id', component: Delete, props: true },
    { path: '/mascotas', component: MascotasRead },
    { path: '/mascotas/create', component: MascotasCreate },
    { path: '/mascotas/update/:id', component: MascotasUpdate, props: true },
    { path: '/mascotas/delete/:id', component: MascotasDelete, props: true },
  ],
})

export default router

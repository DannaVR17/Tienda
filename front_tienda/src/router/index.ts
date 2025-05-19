import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import Create from '../views/tienda/Create.vue'
import Read from '../views/tienda/Read.vue'
import Update from '../views/tienda/Update.vue'
import Delete from '../views/tienda/Delete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/tienda' },
    { path: '/create', component: Create },
    { path: '/tienda', component: Read },
    { path: '/update/:id', component: Update, props: true },
    { path: '/delete/:id', component: Delete, props: true },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import Create from '../views/rapida/Create.vue'
import Read from '../views/rapida/Read.vue'
import Update from '../views/rapida/Update.vue'
import Delete from '../views/rapida/Delete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/rapida' },
    { path: '/create', component: Create },
    { path: '/rapida', component: Read },
    { path: '/update/:id', component: Update, props: true },
    { path: '/delete/:id', component: Delete, props: true },
  ],
  
})

export default router

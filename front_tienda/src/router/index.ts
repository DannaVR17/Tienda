import { createRouter, createWebHistory } from 'vue-router'

import Create from '../views/bebida/Create.vue'
import Read from '../views/bebida/Read.vue'
import Update from '../views/bebida/Update.vue'
import Delete from '../views/bebida/Delete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/bebida' },
    { path: '/create', component: Create },
    { path: '/bebida', component: Read },
    { path: '/update/:id', component: Update, props: true },
    { path: '/delete/:id', component: Delete, props: true },
  ],
})

export default router

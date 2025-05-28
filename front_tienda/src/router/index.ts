import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/tienda/Home.vue'
// Ropa
import RopaRead from '@/views/tienda/Ropa/Read.vue'
import RopaCreate from '@/views/tienda/Ropa/Create.vue'
import RopaUpdate from '@/views/tienda/Ropa/Update.vue'
import RopaDelete from '@/views/tienda/Ropa/Delete.vue'

// Mascotas
import MascotasRead from '@/views/tienda/Mascotas/MascotasRead.vue'
import MascotasCreate from '@/views/tienda/Mascotas/MascotasCreate.vue'
import MascotasUpdate from '@/views/tienda/Mascotas/MascotasUpdate.vue'
import MascotasDelete from '@/views/tienda/Mascotas/MascotasDelete.vue'

// Bebidas
import BebidasRead from '@/views/tienda/Bebidas/Read.vue'
import BebidasCreate from '@/views/tienda/Bebidas/Create.vue'
import BebidasUpdate from '@/views/tienda/Bebidas/Update.vue'
import BebidasDelete from '@/views/tienda/Bebidas/Delete.vue'

// Comida
import ComidaRead from '@/views/tienda/Comida/Read.vue'
import ComidaCreate from '@/views/tienda/Comida/Create.vue'
import ComidaUpdate from '@/views/tienda/Comida/Update.vue'
import ComidaDelete from '@/views/tienda/Comida/Delete.vue'

// Juguetes
import JuguetesRead from '@/views/tienda/Juguetes/Readjug.vue'
import JuguetesCreate from '@/views/tienda/Juguetes/Createjug.vue'
import JuguetesUpdate from '@/views/tienda/Juguetes/Updatejug.vue'
import JuguetesDelete from '@/views/tienda/Juguetes/Deletejug.vue'

// Productos de limpieza
import ProductosRead from '@/views/tienda/Productolimpiezas/Readpro.vue'
import ProductosCreate from '@/views/tienda/Productolimpiezas/Createpro.vue'
import ProductosUpdate from '@/views/tienda/Productolimpiezas/Updatepro.vue'
import ProductosDelete from '@/views/tienda/Productolimpiezas/Eliminarpro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: Home },

    {
      path: '/ropa',
      children: [
        { path: '', component: RopaRead },
        { path: 'create', component: RopaCreate },
        { path: 'update/:id', component: RopaUpdate, props: true },
        { path: 'delete/:id', component: RopaDelete, props: true },
      ]
    },

    {
      path: '/mascotas',
      children: [
        { path: '', component: MascotasRead },
        { path: 'create', component: MascotasCreate },
        { path: 'update/:id', component: MascotasUpdate, props: true },
        { path: 'delete/:id', component: MascotasDelete, props: true },
      ]
    },

    {
      path: '/bebidas',
      children: [
        { path: '', component: BebidasRead },
        { path: 'create', component: BebidasCreate },
        { path: 'update/:id', component: BebidasUpdate, props: true },
        { path: 'delete/:id', component: BebidasDelete, props: true },
      ]
    },

    {
      path: '/comida',
      children: [
        { path: '', component: ComidaRead },
        { path: 'create', component: ComidaCreate },
        { path: 'update/:id', component: ComidaUpdate, props: true },
        { path: 'delete/:id', component: ComidaDelete, props: true },
      ]
    },

    {
      path: '/juguetes',
      children: [
        { path: '', component: JuguetesRead },
        { path: 'create', component: JuguetesCreate },
        { path: 'update/:id', component: JuguetesUpdate, props: true },
        { path: 'delete/:id', component: JuguetesDelete, props: true },
      ]
    },

    {
      path: '/productos',
      children: [
        { path: '', component: ProductosRead },
        { path: 'create', component: ProductosCreate },
        { path: 'update/:id', component: ProductosUpdate, props: true },
        { path: 'delete/:id', component: ProductosDelete, props: true },
      ]
    },
  ]
})

export default router

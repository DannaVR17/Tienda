import { createRouter, createWebHistory } from 'vue-router';
import LimpiezaList from '../components/LimpiezaList.vue';
import LimpiezaForm from '../components/LimpiezaForm.vue';


const routes = [
  { path: '/', component: LimpiezaList },
  { path: '/nuevo', component: LimpiezaForm },
  { path: '/editar/:id', component: LimpiezaForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

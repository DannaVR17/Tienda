<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const categorias = ref([
  { nombre: 'Ropa', img: new URL('@/assets/img/ropa.jpeg', import.meta.url).href, ruta: '/ropa' },
  { nombre: 'Juguetes', img: new URL('@/assets/img/juguetes.jpeg', import.meta.url).href, ruta: '/juguetes' },
  { nombre: 'Productos de limpieza', img: new URL('@/assets/img/limpieza.png', import.meta.url).href, ruta: '/productos' },
  { nombre: 'Comida', img: new URL('@/assets/img/comida.jpeg', import.meta.url).href, ruta: '/comida' },
  { nombre: 'Bebidas', img: new URL('@/assets/img/bebidas.jpeg', import.meta.url).href, ruta: '/bebidas' },
  { nombre: 'Mascotas', img: new URL('@/assets/img/mascotas.jpg', import.meta.url).href, ruta: '/mascotas' }
])

function navegarA(ruta: string) {
  router.push(ruta)
}
</script>

<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo.png" alt="Logo" width="50" height="34" class="d-inline-block align-text-top">
        Tienda Online
      </a>
    </div>
  </nav>

  <div class="tienda">
    <div class="col" v-for="(item, index) in categorias" :key="index">
      <div class="card" @click="navegarA(item.ruta)" style="cursor: pointer;">
        <img :src="item.img" class="card-img-top" :alt="item.nombre" />
        <div class="card-body">
          <h5 class="card-title">{{ item.nombre }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tienda {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
}
.card {
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.card-img-top {
  height: 180px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.card-body {
  text-align: center;
}
</style>

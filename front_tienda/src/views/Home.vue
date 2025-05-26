<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/tiendaApiServices'

const camisas = ref<any[]>([])
const searchTerm = ref('')
const router = useRouter()

function ropa() {
  router.push('/Ropa')
}


</script>

<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
  
    <nav class="navbar bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/logo.png" alt="Logo" width="50" height="34" class="d-inline-block align-text-top">
      Tienda ONline
    </a>
  </div>
</nav>
  <div class="tienda">
  <div class="col">
    <div class="card">
        <a href="" @click="ropa">
            <img src="../assets/img/ropa.jpeg" class="card-img-top" alt="...">
        </a>
      <div class="card-body">
        <h5 class="card-title">Ropa</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/img/juguetes.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Juguetes</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/img/limpieza.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Productos de limpieza</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/img/comida.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Comida</h5>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card">
      <img src="../assets/img/frutas.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Frutas</h5>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card">
      <img src="../assets/img/bebidas.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Bebidas</h5>
      </div>
    </div>
  </div>

   <div class="col">
    <div class="card">
      <img src="../assets/img/mascotas.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Mascotas</h5>
      </div>
    </div>
  </div>

</div>
  
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-img-top {
    border-radius: 10px;
    object-fit: cover;
}
.tienda {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas, ajusta si quieres más o menos */
  grid-template-rows: repeat(2, 1fr);    /* 2 filas */
  gap: 2rem;
  max-width: 900px;
  margin: 3rem auto;
  justify-content: center;
  align-content: center;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.create-btn {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.create-btn:hover {
  background-color: #0056b3;
}

h2 {
  color: #333;
  margin: 0;
}

.search-input {
  width: 100%;
  padding: 0.7rem 1rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.camisa-list {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.camisa-card {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
}

.camisa-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #007acc;
}

p {
  margin: 0.25rem 0;
  color: #555;
  font-size: 0.95rem;
}

.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.edit-btn {
  background-color: #4caf50;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>

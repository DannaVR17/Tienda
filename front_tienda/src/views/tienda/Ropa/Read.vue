<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/camisaApiServices'

const camisas = ref<any[]>([])
const searchTerm = ref('')
const router = useRouter()

onMounted(async () => {
  traerCamisas()
})

const camisasFiltradas = computed(() =>
  camisas.value.filter((camisa) =>
    camisa.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()),
  ),
)

async function traerCamisas() {
  try {
    const data = await apiService.getCamisas()
    camisas.value = data
  } catch (error) {
    console.error('Error al cargar camisas:', error)
  }
}

function crearCamisa() {
  router.push('/ropa/create')
}

function editarCamisa(id: string) {
  router.push(`/ropa/update/${id}`)
}

async function eliminarCamisa(id: any) {
  const confirmado = window.confirm('¿Estás seguro de que deseas eliminar esta camisa?')
  if (!confirmado) return

  try {
    await apiService.deleteCamisa(id)
    alert('Camisa eliminada correctamente.')
    await traerCamisas()
  } catch (err) {
    console.error(err)
    alert('Ocurrió un error al eliminar la camisa.')
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>Camisas registradas</h2>
      <button class="create-btn" @click="crearCamisa">+ Nueva camisa</button>
    </div>

    <input
      v-model="searchTerm"
      class="search-input"
      type="text"
      placeholder="Buscar por nombre..."
    />

    <div class="camisa-list">
      <div class="camisa-card" v-for="camisa in camisasFiltradas" :key="camisa._id">
        <h3>{{ camisa.nombre }}</h3>
        <p><strong>Talla:</strong> {{ camisa.talla }}</p>
        <p><strong>Color:</strong> {{ camisa.color }}</p>
        <p><strong>Precio: $</strong> {{ camisa.precio }}</p>

        <div class="actions">
          <button class="edit-btn" @click="editarCamisa(camisa._id)">Editar</button>
          <button class="delete-btn" @click="eliminarCamisa(camisa._id)">Eliminar</button>
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

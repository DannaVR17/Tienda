<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import mascotasApiService from '@/services/MasoctasApiServices'

const alimento = ref<any[]>([])
const searchTerm = ref('')
const router = useRouter()

onMounted(async () => {
  traerAlimento()
})

const alimentosFiltrados = computed(() =>
  alimento.value.filter((alimento) =>
    alimento.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()),
  ),
)

async function traerAlimento() {
  try {
    const data = await mascotasApiService.getAlimentos()
    alimento.value = data
  } catch (error) {
    console.error('Error al cargar camisas:', error)
  }
}

function crearAlimento() {
  router.push('/mascotas/create')
}

function editarAlimento(id: string) {
  router.push(`/mascotas/update/${id}`)
}

async function eliminarAlimento(id: any) {
  const confirmado = window.confirm('¿Estás seguro de que deseas eliminar esta camisa?')
  if (!confirmado) return

  try {
    await mascotasApiService.deleteAlimentos(id)
    alert('Camisa eliminada correctamente.')
    await traerAlimento()
  } catch (err) {
    console.error(err)
    alert('Ocurrió un error al eliminar la camisa.')
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>Alimentos registrados</h2>
      <button class="create-btn" @click="crearAlimento">+ Nuevo alimento de mascotas</button>
    </div>

    <input
      v-model="searchTerm"
      class="search-input"
      type="text"
      placeholder="Buscar por nombre..."
    />

    <div class="camisa-list">
      <div class="camisa-card" v-for="alimento in alimentosFiltrados" :key="alimento._id">
        <h3>{{ alimento.nombre }}</h3>
        <p><strong>Nombre:</strong> {{ alimento.nombre }}</p>
        <p><strong>Color:</strong> {{ alimento.Peso }}</p>
        <p><strong>edad de perro:</strong> {{ alimento.edad_perro }}</p>
        <p><strong>Precio: $</strong> {{ alimento.precio }}</p>


        <div class="actions">
          <button class="edit-btn" @click="editarAlimento(alimento._id)">Editar</button>
          <button class="delete-btn" @click="eliminarAlimento(alimento._id)">Eliminar</button>
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

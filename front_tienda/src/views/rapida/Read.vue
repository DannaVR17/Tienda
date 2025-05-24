<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/comidaApiServices'

const rapidas = ref<any[]>([])
const searchTerm = ref('')
const router = useRouter()

onMounted(async () => {
  conseguirTodasRapidas()
})

const rapidaFiltradas = computed(() =>
  rapidas.value.filter((rapida) =>
    rapida.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()),
  ),
)

async function conseguirTodasRapidas() {
  try {
    const data = await apiService.conseguirTodasRapidas()
    rapidas.value = data
  } catch (error) {
    console.error('Error al cargar comidas:', error)
  }
}

function crearRapida() {
  router.push('/create')
}

function editarRapida(id: string) {
  router.push(`/update/${id}`)
}

async function eliminarRapida(id: any) {
  const confirmado = window.confirm('¿Estás seguro que deseas eliminar la comida?')
  if (!confirmado) return

  try {
    await apiService.eliminarRapida(id)
    alert('Comida eliminada correctamente.')
    await conseguirTodasRapidas()
  } catch (err) {
    console.error(err)
    alert('Ocurrió un error al eliminar la comida.')
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>Comida registrada</h2>
      <button class="create-btn" @click="crearRapida">+ Nueva comida</button>
    </div>

    <input
      v-model="searchTerm"
      class="search-input"
      type="text"
      placeholder="Buscar por nombre..."
    />

    <div class="rapida-list">
      <div class="rapida-card" v-for="rapida in rapidaFiltradas" :key="rapida._id">
        <h3>{{ rapida.nombre }}</h3>
        <p><strong>Descripción:</strong> {{ rapida.descripcion }}</p>
        <p><strong>Calorias: $</strong> {{ rapida.calorias }}</p>
        <p><strong>Precio: $</strong> {{ rapida.precio }}</p>

        <div class="actions">
          <button class="edit-btn" @click="editarRapida(rapida._id)">Editar</button>
          <button class="delete-btn" @click="eliminarRapida(rapida._id)">Eliminar</button>
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

.rapida-list {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.rapida-card {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
}

.rapida-card:hover {
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

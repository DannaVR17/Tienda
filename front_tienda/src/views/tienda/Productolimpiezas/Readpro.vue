<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/productosApiServices'

const productos = ref<any[]>([])
const searchTerm = ref('')
const router = useRouter()

onMounted(async () => {
  traerProductos()
})

const productosFiltrados = computed(() =>
  productos.value.filter((productos) =>
    productos.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()),
  ),
)

async function traerProductos() {
  try {
    const data = await apiService.getProductos()
    productos.value = data
  } catch (error) {
    console.error('Error al cargar los productos:', error)
  }
}


function createProducto() {
  router.push('/productos/create')
}

function updateProducto(id: string) {
  router.push(`/productos/update/${id}`)
}

async function deleteProducto(id: any) {
  const confirmado = window.confirm('¿Estás seguro de que deseas eliminar este producto?')
  if (!confirmado) return

  try {
    await apiService.deleteProducto(id)
    alert('Producto eliminada correctamente.')
    await traerProductos()
  } catch (err) {
    console.error(err)
    alert('Ocurrió un error al eliminar el producto.')
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>Productos Registrados</h2>
      <button class="create-btn" @click="createProducto">+ Nueva producto</button>
    </div>

    <input
      v-model="searchTerm"
      class="search-input"
      type="text"
      placeholder="Buscar por nombre..."
    />

    <div class="productos-list">
      <div class="productos-card" v-for="productos in productosFiltrados" :key="productos._id">
        <h3>{{ productos.nombre }}</h3>
        <p><strong>Nombre:</strong> {{ productos.nombre }}</p>
        <p><strong>Precio:</strong> {{ productos.precio }}</p>
        <p><strong>Descripción:</strong> {{ productos.descripcion }}</p>


        <div class="actions">
          <button class="edit-btn" @click="updateProducto(productos._id)">Editar</button>
          <button class="delete-btn" @click="deleteProducto(productos._id)">Eliminar</button>
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

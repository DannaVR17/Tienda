<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Lista de Productos de Limpieza</h2>

    <!-- BOTÓN DE CREAR -->
    <button
      class="crear-btn"
      @click="$router.push('/nuevo')"
    >
      Crear nuevo producto
    </button>

    <table class="min-w-full border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 border">Nombre</th>
          <th class="px-4 py-2 border">Marca</th>
          <th class="px-4 py-2 border">Precio</th>
          <th class="px-4 py-2 border">Cantidad</th>
          <th class="px-4 py-2 border">Descripción</th>
          <th class="px-4 py-2 border">Acciones</th> <!-- NUEVA COLUMNA -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto._id" class="hover:bg-gray-100">
          <td class="px-4 py-2 border">{{ producto.nombre }}</td>
          <td class="px-4 py-2 border">{{ producto.marca }}</td>
          <td class="px-4 py-2 border">{{ producto.precio }}</td>
          <td class="px-4 py-2 border">{{ producto.cantidad }}</td>
          <td class="px-4 py-2 border">{{ producto.descripcion }}</td>
          <td class="px-4 py-2 border space-x-2">
            <button class="bg-yellow-400 px-2 py-1 rounded" @click="$router.push(`/editar/${producto._id}`)">Editar</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded" @click="eliminar(producto._id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getProductos, deleteProducto } from '../services/limpiezaApiService'

const router = useRouter()
const productos = ref([])

const obtenerProductos = async () => {
  try {
    const response = await getProductos()
    productos.value = response
  } catch (error) {
    console.error(error)
  }
}

const eliminar = async (id) => {
  if (confirm('¿Seguro que deseas eliminar este producto?')) {
    await deleteProducto(id)
    await obtenerProductos()
  }
}

onMounted(() => {
  obtenerProductos()
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(179, 48, 48, 0.1);
  border-radius: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.crear-btn {
  text-align: center;
  margin-bottom: 20px;
  color: rgb(255, 250, 250);
  background-color: #4a86c7;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

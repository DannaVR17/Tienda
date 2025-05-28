<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/productosApiServices'

const nombre = ref('')
const precio = ref<number | null>(null)
const descripcion = ref('')
const router = useRouter()

const crearProducto = async () => {
  if (!nombre.value || !descripcion.value || precio.value === null) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await apiService.createProducto({
      nombre: nombre.value,
      descripcion: descripcion.value,
      precio: precio.value,
    })
    alert('Producto registrado correctamente.')
    router.push('/productos')
  } catch (error) {
    console.error('Error al crear el producto:', error)
    alert('Ocurrió un error al registrar un producto.')
  }
}
</script>

<template>
  <div class="container">
    <h2>Registrar nuevo Producto</h2>

    <form @submit.prevent="crearProducto" class="form">
      <label>
        Nombre:
        <input v-model="nombre" type="text" placeholder="Ej. Jabón" />
      </label>

      <label>
        Descripción:
        <input v-model="descripcion" type="text" placeholder="Ej. Jabón para lavar ropa" />
      </label>

      <label>
        Precio:
        <input v-model.number="precio" type="number" placeholder="Ej. 19.99" />
      </label>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 3rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #007acc;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #444;
}

input,
select {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 0.5rem;
}

button {
  background-color: #007acc;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #005f99;
}
</style>

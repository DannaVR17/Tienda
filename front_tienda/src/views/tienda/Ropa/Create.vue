<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/tiendaApiServices'

const nombre = ref('')
const talla = ref('')
const color = ref('')
const precio = ref('')
const router = useRouter()

const crearCamisa = async () => {
  if (!nombre.value || !talla.value || !color.value || !precio.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await apiService.createCamisa({
      nombre: nombre.value,
      talla: talla.value,
      color: color.value,
      precio: parseFloat(precio.value),
    })
    alert('Camisa registrada correctamente.')
    router.push('/tienda')
  } catch (error) {
    console.error('Error al crear la camisa:', error)
    alert('Ocurrió un error al registrar la camisa.')
  }
}
</script>

<template>
  <div class="container">
    <h2>Registrar nueva camisa</h2>

    <form @submit.prevent="crearCamisa" class="form">
      <label>
        Nombre:
        <input v-model="nombre" type="text" placeholder="Ej. Camisa polo" />
      </label>

      <label>
        Talla:
        <select v-model="talla">
          <option disabled value="">Selecciona una talla</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </label>

      <label>
        Color:
        <input v-model="color" type="text" placeholder="Ej. Azul, Rojo..." />
      </label>

      <label>
        Precio:
        <input v-model="precio" type="number" placeholder="Ej. 19.99" />
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

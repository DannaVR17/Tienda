<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/Bebidas.ApiService'

const nombre = ref('')
const tipo = ref('')
const disponible = ref('')
const precio = ref('')
const router = useRouter()

const createBebida = async () => {
  if (!nombre.value || !tipo.value || !disponible.value || !precio.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await apiService.createBebida({
      nombre: nombre.value,
      tipo: tipo.value,
      disponible: disponible.value,
      precio: parseFloat(precio.value),
    })
    alert('Bebida registrada correctamente.')
    router.push('/bebidas')
  } catch (error) {
    console.error('Error al crear la bebida:', error)
    alert('Ocurrió un error al registrar la bebida.')
  }
}
</script>

<template>
  <div class="container">
    <h2>Registrar nueva bebida</h2>

    <form @submit.prevent="createBebida" class="form">
      <label>
        Nombre:
        <input v-model="nombre" type="text" placeholder="Ej. Coca Cola" />
      </label>

      <label>
        Tipo:
        <select v-model="tipo">
          <option disabled value="">seleccione un tipo</option>
          <option>Sin alcohol</option>
          <option>alcohol</option>
          <option>sin azucar</option>
          <option>azucar</option>
        </select>
      </label>

      <div class="form-group">
        <label for="disponible">¿Disponible?</label>
          <select id="disponible" v-model="disponible" required>
          <option :value="true">Sí</option>
          <option :value="false">No</option>
        </select>
      </div>

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
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/RapidaApiService'

const nombre = ref('')
const descripcion = ref('')
const calorias = ref('')
const precio = ref('')
const router = useRouter()

const crearRapida = async () => {
  if (!nombre.value || !descripcion.value || !calorias.value || !precio.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await apiService.crearRapida({
      nombre: nombre.value,
      descripcion: descripcion.value,
      calorias: calorias.value,
      precio: parseFloat(precio.value),
    })
    alert('Comida registrada correctamente.')
    router.push('/comida')
  } catch (error) {
    console.error('Error al crear la comida:', error)
    alert('Ocurrió un error al registrar la comida.')
  }
}
</script>
<template>
  <div class="container">
    <h2>Registrar nueva comida</h2>

    <form @submit.prevent="crearRapida" class="form">
      <label>
        Nombre de la comida:
        <input v-model="nombre" type="text" placeholder="Ej. Hamburguesa" />
      </label>

      <label>
        Descripción:
        <input v-model="descripcion" type="text" placeholder="Ej. Hamburguesa con queso y papas" />
      </label>

      <label>
        Calorías:
        <input v-model="calorias" type="number" placeholder="Ej. 550" min="0" />
      </label>

      <label>
        Precio:
        <input v-model="precio" type="number" placeholder="Ej. 12000" min="0" step="0.01" />
      </label>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 420px;
  margin: 2.5rem auto;
  background: #f9fafb;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 18px;
  box-shadow: 0 2px 18px rgba(0, 122, 204, 0.10);
  font-family: 'Segoe UI', Arial, sans-serif;
}

h2 {
  margin-bottom: 2rem;
  text-align: center;
  color: #0a3d62;
  font-weight: 700;
  letter-spacing: 1px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 1.08rem;
  color: #222f3e;
  font-weight: 500;
  gap: 0.5rem;
}

input,
select {
  padding: 0.75rem 1rem;
  border: 1.5px solid #b2bec3;
  border-radius: 10px;
  font-size: 1.05rem;
  margin-top: 0.2rem;
  background: #fff;
  transition: border-color 0.2s;
}

input:focus,
select:focus {
  border-color: #007acc;
  outline: none;
}

button {
  background-color: #007acc;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 12px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.2rem;
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.08);
}

button:hover {
  background-color: #005f99;
  box-shadow: 0 4px 16px rgba(0, 122, 204, 0.13);
}
</style>

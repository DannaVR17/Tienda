<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MascotasapiService from '@/services/MasoctasApiServices'

const nombre = ref('')
const Peso = ref('')
const edad_perro = ref('')
const precio = ref('')
const router = useRouter()

const crearCamisa = async () => {
  if (!nombre.value || !Peso.value || !edad_perro.value || !precio.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await MascotasapiService.createAlimento({
      nombre: nombre.value,
      Peso: Peso.value,
      edad_perro: edad_perro.value,
      precio: parseFloat(precio.value),
    })
    alert('alimento registrado correctamente.')
    router.push('/tienda')
  } catch (error) {
    console.error('Error al crear el alimento:', error)
    alert('Ocurrió un error al registrar el alimento.')
  }
}
</script>

<template>
  <div class="container">
    <h2>Registrar nuevo alimento</h2>

    <form @submit.prevent="crearCamisa" class="form">
      <label>
        Nombre:
        <input v-model="nombre" type="text" placeholder="Ej. Nutrecan" />
      </label>

      <label>
        Talla:
        <select v-model="Peso">
          <option disabled value="">Selecciona un peso</option>
          <option>8 kg</option>
          <option>15 kg</option>
          <option>23 kg</option>
          <option>+30 kg</option>
        </select>
      </label>

      <label>
        Edad del perro:
        <input v-model="edad_perro" type="text" placeholder="Ej. 1 año, 8 años..." />
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

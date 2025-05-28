<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiService from '@/services/JuguetesApiServices'

const route = useRoute()
const router = useRouter()

interface juguete {
  nombre: string
  talla: string
  color: string
  precio: number
  categoria: string
  edadRecomendada: number
}


const juguete = reactive<juguete>({
  nombre: '',
  talla: '',
  color: '',
  precio: 0,
  categoria: '',
  edadRecomendada: 0,
})


const error = ref('')

onMounted(async () => {
  try {
    const id = route.params.id as string
    const data = await apiService.getjugueteById(id)
    juguete.nombre = data.nombre
    juguete.talla = data.talla
    juguete.color = data.color
    juguete.precio = data.precio
    juguete.categoria = data.categoria
    juguete.edadRecomendada = data.edadRecomendada

  } catch (e) {
    error.value = 'Error cargando datos de la juguete.'
    console.error(e)
  }
})

const actualizarjuguete = async () => {
  try {
    const id = route.params.id as string
    await apiService.updatejuguete(id, juguete)
    alert('juguete actualizada con éxito.')
    router.push('/juguetes')
  } catch (e) {
    error.value = 'Error actualizando la juguete.'
    console.error(e)
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Editar juguete</h2>
    <form @submit.prevent="actualizarjuguete" novalidate>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="juguete.nombre"
          required
          placeholder="Nombre de la juguete"
        />
      </div>

      <div class="form-group">
  <label for="categoria">Categoría:</label>
  <input
    type="text"
    id="categoria"
    v-model="juguete.categoria"
    required
    placeholder="Categoría del juguete"
  />
</div>

<div class="form-group">
  <label for="edad">Edad recomendada:</label>
  <input
    type="number"
    id="edad"
    v-model.number="juguete.edadRecomendada"
    required
    placeholder="Edad recomendada"
  />
</div>


      <div class="form-group">
        <label for="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          v-model.number="juguete.precio"
          required
          placeholder="Precio de la juguete"
        />
      </div>

      <button type="submit">Actualizar</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 480px;
  margin: 2rem auto;
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 0 12px rgb(0 0 0 / 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #444;
}

input {
  padding: 0.5rem 0.75rem;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

select {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 0.5rem;
}

input:focus {
  outline: none;
  border-color: #3b82f6; /* azul */
  box-shadow: 0 0 6px #3b82f6aa;
}

button {
  width: 100%;
  padding: 0.6rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2563eb;
}

.error-message {
  margin-top: 1rem;
  color: #e11d48; /* rojo */
  font-weight: 600;
  text-align: center;
}
</style>

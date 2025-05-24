<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import apiService from '@/services/comidaApiServices'

const route = useRoute()
const router = useRouter()

interface rapida {
  nombre: string
  descripcion: string
  calorias: number
  precio: number
}

const rapida = reactive<rapida>({
  nombre: '',
  descripcion: '',
  calorias: 0,
  precio: 0,
})

const error = ref('')

onMounted(async () => {
  try {
    const id = route.params.id as string
    const data = await apiService.conseguirRapidaPorId(id)
    rapida.nombre = data.nombre
    rapida.descripcion = data.descripcion
    rapida.calorias = data.calorias
    rapida.precio = data.precio
  } catch (e) {
    error.value = 'Error cargando datos de la camisa.'
    console.error(e)
  }
})

const actualizarRapida = async () => {
  try {
    const id = route.params.id as string
    await apiService.actualizarRapida(id, rapida)
    alert('Comida actualizada con éxito.')
    router.push('/rapida')
  } catch (e) {
    error.value = 'Error actualizando la camisa.'
    console.error(e)
  }
}
</script>
<template>
  <div class="form-container">
    <h2>Actualizar comida</h2>
    <form @submit.prevent="actualizarRapida" novalidate>
      <div class="form-group">
        <label for="nombre">Nombre de la comida:</label>
        <input
          type="text"
          id="nombre"
          v-model="rapida.nombre"
          required
          placeholder="Ej: Hamburguesa"
        />
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          v-model="rapida.descripcion"
          required
          placeholder="Descripción de la comida"
        />
      </div>

      <div class="form-group">
        <label for="calorias">Calorías:</label>
        <input
          type="number"
          id="calorias"
          v-model.number="rapida.calorias"
          required
          placeholder="Cantidad de calorías"
        />
      </div>

      <div class="form-group">
        <label for="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          v-model.number="rapida.precio"
          required
          placeholder="Precio de la comida"
        />
      </div>

      <button type="submit">Actualizar</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 440px;
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

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #222f3e;
  font-size: 1.08rem;
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

.error-message {
  margin-top: 1rem;
  color: #e11d48;
  font-weight: 600;
  text-align: center;
}
</style>

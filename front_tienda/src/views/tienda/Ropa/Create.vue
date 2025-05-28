<template>
  <div class="container">
    <h2>Registrar nueva camisa</h2>

    <!-- ✅ Se agrega .prevent para evitar el POST automático -->
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
        <input v-model="precio" type="number" placeholder="Ej. 19900" />
      </label>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '@/services/camisaApiServices'

const nombre = ref('')
const talla = ref('')
const color = ref('')
const precio = ref('')
const router = useRouter()

// ✅ Ya no necesitamos (e: Event) ni e.preventDefault()
const crearCamisa = async () => {
  console.log('🧪 Enviando camisa...')

  if (!nombre.value || !talla.value || !color.value || !precio.value) {
    alert('Por favor completa todos los campos.')
    return
  }

  try {
    await apiService.createCamisa({
      nombre: nombre.value,
      talla: talla.value,
      color: color.value,
      precio: parseFloat(precio.value), // ✅ Asegura que sea número
    })
    alert('Camisa registrada correctamente.')
    router.push('/ropa')
  } catch (error) {
    console.error('Error al crear la camisa:', error)
    alert('Ocurrió un error al registrar la camisa.')
  }
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      {{ esEdicion ? 'Editar Producto' : 'Crear Producto' }}
    </h1>

    <form @submit.prevent="manejarSubmit" class="space-y-4">
      <div>
        <label class="block">Nombre:</label>
        <input v-model="producto.nombre" type="text" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div>
        <label class="block">Marca:</label>
        <input v-model="producto.marca" type="text" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div>
        <label class="block">Precio:</label>
        <input v-model.number="producto.precio" type="number" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div>
        <label class="block">cantidad:</label>
        <input v-model.number="producto.cantidad" type="number" class="w-full border px-3 py-2 rounded" required />
      </div>

      <div>
        <label class="block">Descripción:</label>
        <textarea v-model="producto.descripcion" class="w-full border px-3 py-2 rounded" required></textarea>
      </div>


      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        {{ esEdicion ? 'Actualizar' : 'Crear' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  getProducto,
  createProducto,
  updateProducto,
} from '../services/limpiezaApiService.ts';

const route = useRoute();
const router = useRouter();

const producto = ref({
  nombre: '',
  marca: '',
  precio: 0,
  cantidad: 0,
  descripcion: '',
});

const esEdicion = ref(false);

onMounted(async () => {
  const id = route.params.id as string;
  if (id) {
    esEdicion.value = true;
    const datos = await getProducto(id);
    producto.value = datos;
  }
});

const manejarSubmit = async () => {
  if (esEdicion.value) {
    await updateProducto(route.params.id as string, producto.value);
  } else {
    await createProducto(producto.value);
  }
  router.push('/');
};
</script>
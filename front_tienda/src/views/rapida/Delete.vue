<template>
  <div>
    <h1>Eliminar</h1>
    <!-- Confirmación para eliminar -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
// Lógica para confirmar y eliminar entidad
</script>

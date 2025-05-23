<template>
  <div class="container">
    <h2 class="title">Registrar Nuevo Juguete</h2>

    <form @submit.prevent="crearJuguete" class="form">
      <div class="form-group">
        <label>Nombre:</label>
        <input v-model="nombre" type="text" placeholder="Ej. Juguete Transformer" required />
      </div>

      <div class="form-group">
        <label>Categoría:</label>
        <select v-model="categoria" required>
          <option disabled value="">Selecciona una categoría</option>
          <option>Acción</option>
          <option>Educativo</option>
          <option>Peluches</option>
          <option>Vehículos</option>
          <option>Construcción</option>
        </select>
      </div>

      <div class="form-group">
        <label>Edad recomendada:</label>
        <input v-model="edadRecomendada" type="text" placeholder="Ej. 3-5 años" required />
      </div>

      <div class="form-group">
        <label>Color:</label>
        <input v-model="color" type="text" placeholder="Ej. Azul, Rojo..." />
      </div>

      <div class="form-group">
        <label>Precio:</label>
        <input v-model="precio" type="number" step="0.01" placeholder="Ej. 19.99" required />
      </div>

      <button type="submit" class="submit-button">Guardar</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f9f9f9;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #444;
}

input,
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

input:focus,
select:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>

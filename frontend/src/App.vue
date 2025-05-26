<template>
  <div class="container mx-auto p-4">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.crear-btn {
  display: block;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

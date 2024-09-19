<template>
  <div>
    <!-- Menú de navegación -->
    <nav class="bg-gray-800 p-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white">Principal</router-link>
        </li>
        <li>
          <router-link to="/Contactopagina" class="text-white">Contacto</router-link>
        </li>
        <li>
          <router-link to="/Featurepagina" class="text-white">Feature</router-link>
        </li>
        <li>
          <router-link to="/Preciocontacto" class="text-white">price</router-link>
        </li>
      </ul>
    </nav>

    <!-- Aquí se renderizarán las rutas -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// No es necesario importar nada adicional en este caso
</script>

<style scoped>
/* Puedes agregar estilos para el menú de navegación aquí si lo necesitas */
nav ul {
  list-style-type: none;
}
</style>

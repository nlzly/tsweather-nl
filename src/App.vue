<script setup lang="ts">
import WeatherComponent from './components/WeatherComponent.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-4xl mb-4">Weather App</h1>
    <WeatherComponent />
  </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>

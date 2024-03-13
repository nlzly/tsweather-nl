<script setup lang="ts">
import WeatherComponent from '../components/WeatherComponent.vue'
</script>
  
<template>
  <div class="about">
    <WeatherComponent/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

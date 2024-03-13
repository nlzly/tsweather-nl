<!-- MyComponent.vue -->

<template>
    <div>
      {{ data }}
    </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { WeatherResponse } from '@/types/WeatherResponse';
import { ApiService } from '../services/weatherService';
import type { CoordinatePair } from '@/types/CoordinatePair';
import CoordinateHelper from '@/services/CoordinateHelper';

export default defineComponent({
  name: 'WeatherComponent',
  setup() {
    let data = ref();
    onMounted(async () => {
      try {
        const userLocaiton : CoordinatePair = await CoordinateHelper.getCoords();
        const response = await ApiService.getWeather<WeatherResponse>(userLocaiton);
        data.value = response.data;
        console.log(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });

    return { data };
  },
});
</script>
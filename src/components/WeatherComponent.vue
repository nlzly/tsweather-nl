 <script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import type { WeatherResponse } from '@/types/WeatherResponse';
import { ApiService } from '../services/WeatherService';
import type { CoordinatePair } from '@/types/CoordinatePair';
import CoordinateHelper from '@/services/CoordinateHelper';
import Weatherbox from './Weatherbox.vue';

let data = ref();
let dataLoaded = ref(false);

onMounted(async () => {
      try {
        const userLocaiton : CoordinatePair = await CoordinateHelper.getCoords();
        const response = await ApiService.getWeather<WeatherResponse>(userLocaiton, 5);
        data.value = response.data;

        dataLoaded.value = true;
        console.log(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });
</script>

<template>
  <div>
    <div v-if="dataLoaded" v-for="weatherDay in data.forecast.forecastday">
      <Weatherbox :weather-data="weatherDay"/>
    </div>
  </div>
</template>
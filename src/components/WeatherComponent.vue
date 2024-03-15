 <script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import type { WeatherResponse } from '@/types/WeatherResponse';
import { ApiService } from '../services/WeatherService';
import type { CoordinatePair } from '@/types/CoordinatePair';
import CoordinateHelper from '@/services/CoordinateHelper';
import Weatherbox from './Weatherbox.vue';
import type { WeatherboxInput } from '@/types/WeatherboxInput';
import type { Ref } from 'vue';
import Utils from '@/services/Utils';
import { temperatureUnits } from '@/services/Utils';

let data = ref();
let dataLoaded = ref(false);
let weatherData: Ref<WeatherboxInput> = 
  ref<WeatherboxInput>({
    imageUrl: "", 
    temperatureUnits: temperatureUnits.Celsius,
    currentWeather: {
      currentTemp: 0,
      high: 0,
      low: 0,
      currentConditions: '',
    }
    });
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
    <Weatherbox v-if="dataLoaded" :weather-data="data"/>
  </div>
</template>
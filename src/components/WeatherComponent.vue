 <script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
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
let imageUrl = ref("");
let weatherData: Ref<WeatherboxInput> = 
  ref<WeatherboxInput>({
    imageUrl: "", 
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
        const response = await ApiService.getWeather<WeatherResponse>(userLocaiton);
        data.value = response.data;
        imageUrl.value = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        weatherData.value = {
          imageUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          currentWeather: { 
            currentTemp: Utils.convertTemperature(response.data.main.temp, temperatureUnits.Kelvin, temperatureUnits.Celsius ),
            high: Utils.convertTemperature(response.data.main.temp_max, temperatureUnits.Kelvin, temperatureUnits.Celsius ),
            low: Utils.convertTemperature(response.data.main.temp_min, temperatureUnits.Kelvin, temperatureUnits.Celsius ),
            currentConditions: response.data.weather[0].main
          }
        }
        console.log(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    });
</script>

<template>
  <div>
    <Weatherbox :weather-data="weatherData"/>
  </div>
</template>
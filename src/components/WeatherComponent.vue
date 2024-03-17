 <script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { WeatherResponse, LocationResponse } from '@/types/WeatherResponse';
import { ApiService } from '../services/WeatherService';
import type { CoordinatePair } from '@/types/CoordinatePair';
import CoordinateHelper from '@/services/CoordinateHelper';
import Weatherbox from './Weatherbox.vue';

let data = ref();
let dataLoaded = ref(false);
let locationInput = ref(''); // to hold the user input
let locationData = ref();
const error = ref('');
let tempUnit = ref(localStorage.getItem('tempUnit') || 'Celsius');

const switchTempUnit = () => {
    tempUnit.value = tempUnit.value === 'Celsius' ? 'Fahrenheit' : 'Celsius';
    localStorage.setItem('tempUnit', tempUnit.value);
}

const submitForm = async () => {
  try {
    const response = await ApiService.getLocations<LocationResponse[]>(locationInput.value);
    if (response.data.length > 0) {
      locationData.value = response.data;
      error.value = '';
    } else {
      error.value = `Location not found ${locationInput.value}. Please try again.`;
    }
    console.log(response.data);
    const inputLocation : CoordinatePair = {
      latitide: locationData.value[0].lat,
      longitude: locationData.value[0].lon
    };
    const weatherResponse = await ApiService.getWeather<WeatherResponse>(inputLocation, 5);
    data.value = weatherResponse.data;
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};

onMounted(async () => {
      if (localStorage.getItem('tempUnit')) {
          tempUnit.value = localStorage.getItem('tempUnit') || 'Celsius';
      }
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
    <div class="flex flex-col items-center">
      <div class="flex flex-row">
        <form @submit.prevent="submitForm">
        <input v-model="locationInput" type="text" placeholder="Enter City, Country or ZipCode" class="location-input">
        <button type="submit" class="submit-button">Get Weather</button>
        </form>

      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="locationData">
          <h2>{{ locationData[0].name }}, {{ locationData[0].region }}, {{ locationData[0].country }}</h2>
      </div>
      <div v-if="!locationData">
        <h2>Current Location</h2>
      </div>
    </div>
    <div class="flex flex-wrap justify-center">
      <div  v-if="dataLoaded" v-for="weatherDay in data.forecast.forecastday">
        <Weatherbox :weather-data="weatherDay" :temp-unit="tempUnit"/>
      </div>
    </div>
    <button @click="switchTempUnit" class="temp-switch-button">{{ tempUnit }}</button>
  </div>
</template>

<style scoped>
.location-input {
  color: black;
  font-size: 18px;
  height: 40px;
  width: 400px;
}
.submit-button {
  border: 2px solid #000;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}
.temp-switch-button {
  border: 2px solid #000;
  padding: 10px 20px;
  margin-left: auto;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  display: block;
}
.error {
  color: red;
}
</style>
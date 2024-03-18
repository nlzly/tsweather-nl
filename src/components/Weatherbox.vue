<script setup lang="ts">
import type { forecastday } from '@/types/WeatherResponse';

defineProps<{
    weatherData:forecastday,
    tempUnit: string
}>()
</script>

<template>
    <div class="flex flex-col items-center m-4">
        <div class="flex flex-col rounded-md items-center border p-2 weatherbox">
            {{ new Date(weatherData.date).toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' }) }} {{ weatherData.date }}
            <img :src=weatherData.day.condition.icon alt="weather icon"/>
            <div class="text-center">
                {{ weatherData.day.condition.text }}
            </div>
            <div>
                High: {{ tempUnit === 'Celsius' ? weatherData.day.maxtemp_c : weatherData.day.maxtemp_f }} °{{ tempUnit === 'Celsius' ? 'C' : 'F' }}
            </div>
            <div>
                Low: {{ tempUnit === 'Celsius' ? weatherData.day.mintemp_c : weatherData.day.mintemp_f }} °{{ tempUnit === 'Celsius' ? 'C' : 'F' }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.weatherbox {  
    min-width: 200px;
    padding: 10px;
}
</style>
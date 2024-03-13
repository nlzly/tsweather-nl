<script setup lang="ts">
import type { WeatherboxInput } from '@/types/WeatherboxInput';

defineProps<{
    weatherData:WeatherboxInput
}>()
</script>

<template>
    <div class="flex flex-col items-center m-4 border rounded-md weatherboxcontainer">
        Weather Today
        <img :src=weatherData.imageUrl alt="weather icon"/>
        <div class="text-center">
            {{ weatherData.currentWeather.currentConditions }}
        </div>
        <div class="flex flex-row mx-6 gap-1">
            <div>
                Current Temp:
            </div>
            <div>
                {{weatherData.currentWeather.currentTemp}} °{{ weatherData.temperatureUnits }}
            </div>
        </div>
        <div>
            High: {{weatherData.currentWeather.high}} °{{ weatherData.temperatureUnits }}
        </div>
        <div>
            Low: {{weatherData.currentWeather.low}} °{{ weatherData.temperatureUnits }}
        </div>
    </div>
</template>

<style scoped>
.weatherboxcontainer {
    min-width: 200px;
}
</style>
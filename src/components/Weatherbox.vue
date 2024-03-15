<script setup lang="ts">
import type { WeatherResponse } from '@/types/WeatherResponse';

defineProps<{
    weatherData:WeatherResponse
}>()
</script>

<template>
    <div class="flex flex-col items-center m-4 border rounded-md weatherboxcontainer">
        Weather Today
        <img :src=weatherData.current.condition.icon alt="weather icon"/>
        <div class="text-center">
            {{ weatherData.current.condition.text }}
        </div>
        <div class="flex flex-row mx-6 gap-1">
            <div>
                Current Temp:
            </div>
            <div>
                {{weatherData.current.temp_c}} °C
            </div>
        </div>
        <div>
            High: {{weatherData.forecast.forecastday[0].day.maxtemp_c}} °C
        </div>
        <div>
            Low: {{weatherData.forecast.forecastday[0].day.mintemp_c}} °C
        </div>
    </div>
</template>

<style scoped>
.weatherboxcontainer {
    min-width: 200px;
}
</style>
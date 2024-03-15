<script setup lang="ts">
import type { forecastday } from '@/types/WeatherResponse';

defineProps<{
    weatherData:forecastday
}>()
</script>

<template>
    <div class="flex flex-col items-center m-4 border rounded-md weatherboxcontainer">
        {{ weatherData.date }}
        <img :src=weatherData.day.condition.icon alt="weather icon"/>
        <div class="text-center">
            {{ weatherData.day.condition.text }}
        </div>
        <div>
            High: {{weatherData.day.maxtemp_c}} °C
        </div>
        <div>
            Low: {{weatherData.day.mintemp_c}} °C
        </div>
    </div>
</template>

<style scoped>
.weatherboxcontainer {
    min-width: 200px;
}
</style>
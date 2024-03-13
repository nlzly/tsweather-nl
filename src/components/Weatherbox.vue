<script setup lang="ts">
import type { WeatherboxInput } from '@/types/WeatherboxInput';

defineProps<{
    weatherData:WeatherboxInput
}>()
</script>

<template>
    <div class="item">
        <img :src=weatherData.imageUrl alt="weather icon"/>
        <div class="flex flex-row">
            <div>
                Current Temp:
            </div>
            <div>
                {{weatherData.currentWeather.currentTemp}}°
            </div>
        </div>
        <div>
            High: {{weatherData.currentWeather.high}}°
        </div>
        <div>
            Low: {{weatherData.currentWeather.low}}°
        </div>
    </div>
</template>
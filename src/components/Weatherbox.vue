<script setup lang="ts">
import type { WeatherboxInput } from '@/types/WeatherboxInput';

defineProps<{
    weatherData:WeatherboxInput
}>()
</script>

<template>
    <div class="flex flex-col items-center">
        Weather Today
        <img :src=weatherData.imageUrl alt="weather icon"/>
        <div class="text-center">
            {{ weatherData.currentWeather.currentConditions }}
        </div>
        <div class="flex flex-row gap-1">
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
// apiService.ts

import axios, { type AxiosResponse } from 'axios';
import type { CoordinatePair } from '@/types/CoordinatePair';

const API_URL = 'http://api.weatherapi.com/v1/forecast.json';
const OpenweatherKey : any = import.meta.env.VITE_OPENWEATHER_API_KEY;

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}

interface WeatherRequestParams {
    q : string;
    key : string;
    days: number;
} 
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

export const ApiService = {
    async getWeather<T>(input : CoordinatePair, days: number): Promise<ApiResponse<T>> {
        try {
            const params : WeatherRequestParams = { q: `${input.latitide},${input.longitude}`, key : OpenweatherKey, days : days}
            const response: AxiosResponse<T> = await axios.get(`${API_URL}weather`, { params });
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                config: response.config,
                request: response.request,
            };
        } catch (error : any) {
            throw new Error(error);
        }
    },
};
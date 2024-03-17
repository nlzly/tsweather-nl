// apiService.ts

import axios, { type AxiosResponse } from 'axios';
import type { CoordinatePair } from '@/types/CoordinatePair';

const API_URL = 'http://api.weatherapi.com/v1/';
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

interface LocationRequestParams {
    q: string;
    key: string;
}

export const ApiService = {
    async getWeather<T>(input : CoordinatePair, days: number): Promise<ApiResponse<T>> {
        try {
            const params : WeatherRequestParams = { q: `${input.latitide},${input.longitude}`, key : OpenweatherKey, days : days}
            const response: AxiosResponse<T> = await axios.get(`${API_URL}forecast.json`, { params });
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
    async getLocations<T>(locationInput : string): Promise<ApiResponse<T>> {
        try {
            const params : LocationRequestParams = { q: locationInput, key : OpenweatherKey}
            const response: AxiosResponse<T> = await axios.get(`${API_URL}search.json`, { params });
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
    }
};
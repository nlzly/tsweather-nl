export interface WeatherboxInput {
    imageUrl : string;
    currentWeather: dailyWeatherData;
}

interface dailyWeatherData {
    currentTemp: number;
    high : number;
    low : number;
    currentConditions: string;
}
export interface WeatherboxInput {
    imageUrl : string;
    currentWeather: dailyWeatherData;
    temperatureUnits: string;
}

interface dailyWeatherData {
    currentTemp: number;
    high : number;
    low : number;
    currentConditions: string;
}
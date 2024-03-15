export interface WeatherResponse {
    location: location;
    current: current;
    forecast: forecast;
}

interface location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
}

interface current {
    temp_c: number;
    temp_f: number;
    condition: condition;

}

interface condition {
    text: string;
    icon: string;
    code: number;
}

interface forecast {
    forecastday: forecastday[]
}

export interface forecastday {
    date: string;
    date_epoch: number;
    day: day; 
}

interface day {
    maxtemp_c: string;
    maxtemp_f: string;
    mintemp_c: string;
    mintemp_f: string;
    avgtemp_c: string;
    avgtemp_f: string;
    condition: condition;
}
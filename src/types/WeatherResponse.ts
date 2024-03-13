export interface WeatherResponse {
    coord : CoordinatePair;
    weather : Weather;
    main: WeatherDescription;
}

interface CoordinatePair {
    lon : number;
    lat : number;
}

interface Weather {
    main: string;
    description: string;
}

interface WeatherDescription {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}
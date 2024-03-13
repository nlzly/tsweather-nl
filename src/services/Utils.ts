export enum temperatureUnits {
    Kelvin = "K",
    Celsius = "C",
    Fahrenheit = "F"
}
export default class Utils {
    static convertTemperature(temperatureValue : number, unitsFrom: temperatureUnits, unitsTo:temperatureUnits) : number {
        let preFixedValue:number = 0;
        if(unitsFrom === temperatureUnits.Kelvin) {
            if(unitsTo === temperatureUnits.Celsius) {
                preFixedValue = temperatureValue - 273.15;
            } else {
                preFixedValue = 1.8*(temperatureValue-273) + 32;
            }
        }
        return Number(preFixedValue.toFixed(2));
    }
}
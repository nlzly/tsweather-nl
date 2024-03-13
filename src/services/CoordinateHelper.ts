import type { CoordinatePair } from "@/types/CoordinatePair";

function getPosition(options?: PositionOptions): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
};
export default class CoordinateHelper {
    static async getCoords():Promise<CoordinatePair> {
        let userLocaiton : CoordinatePair = {longitude: 0, latitide: 0};
          if(navigator.geolocation) {
            let position = await getPosition()
                .then((position) => {
                    return position;
                })
            userLocaiton.latitide = position.coords.latitude;
            userLocaiton.longitude = position.coords.longitude;
            return userLocaiton;
          } else {
            return userLocaiton;
          }
          
      }
    
}
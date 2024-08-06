import { useState } from 'react'

/**
 * Get the Current location of the user
 * 
 * @returns {[string, string]}
 */

export const useLocation = () => {
    const [latitude, setLatitude] = useState("30.008");
    const [longitude, setLongitude] = useState("31.2194");

    // get current location 
    const success = (position: GeolocationPosition) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
    }

    const error = (error: GeolocationPositionError) => { console.log(error.message); }

    !navigator.geolocation ?
        console.log('Geolocation is not supported by your browser') :
        navigator.geolocation.getCurrentPosition(success, error);

    return [latitude, longitude]
}

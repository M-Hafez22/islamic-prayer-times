import {useState} from 'react'

/**
 * Get the Current location of the user
 * 
 * @returns {[string, string]}
 */

export const  useLoaction = () =>  {

    const [latitude, setLatitude] = useState("30.008");
    const [longitude, setLongitude] = useState("31.2194");

    // get current location 
    const  success = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }
    
    const  error = (position) => {console.log(position.message);}
    
    !navigator.geolocation ?
        console.log('Geolocation is not supported by your browser') :
        navigator.geolocation.getCurrentPosition(success, error);

    return [latitude, longitude]

}

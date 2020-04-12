import {useState} from 'react'

export const  useLoaction = () =>  {

    const [latitude, setLatitude] = useState("55.924600499999997");
    const [longitude, setLongitude] = useState("35.851709500000005");

    // get current location 
    const  success = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }
    
    const  error = () => {console.log('Unable to retrieve your location');}
    
    !navigator.geolocation ?
        console.log('Geolocation is not supported by your browser') :
        navigator.geolocation.getCurrentPosition(success, error);

    return [latitude, longitude]

}
import React, { createContext } from "react";
import { useFetch } from '../hooks/useFetch'
import { useLocation } from '../hooks/useLocation';

export const FetchedDataContext = createContext();

export function FetchedDataProvider(props) {

    // Get Local coords
    const [latitude, longitude] = useLocation();
    // Get time
    const date = Math.floor(Date.now() / 1000);
    // Get Data
    const [loaded, data] = useFetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}`);
console.log(data);
    return (
        <FetchedDataContext.Provider value={[loaded, data]}>
            {props.children}
        </FetchedDataContext.Provider>
    )
}

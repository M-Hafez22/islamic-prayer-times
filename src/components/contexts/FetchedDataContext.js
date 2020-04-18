import React, {createContext}from "react";
import {useFetch} from '../hooks/useFetch'
import {useLoaction} from '../hooks/useLocation';

export const FetchedDataContext = createContext();

export function FetchedDataProvider(props) {
    
    // Get Local coords
    const [latitude, longitude] = useLoaction();
    // Get the current time

    const date = Math.floor(Date.now() / 1000);
    // Get Data
    const [loaded, data] = useFetch(`http://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=5`);



    return(
    <FetchedDataContext.Provider value={[loaded, data]}>
        {props.children}
    </FetchedDataContext.Provider>
    )
}




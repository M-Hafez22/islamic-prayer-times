import React, {useState, createContext}from "react";
import {useFetch} from './hooks/useFetch'
import {useLoaction} from './hooks/useLocation';
import { useCurrentDate } from './hooks/useCurrentDate';

export const FetchedDataContext = createContext();

export function FetchedDataProvider(props) {
    
    // Get Local coords
    const [latitude, longitude] = useLoaction();
    // Get the current time
    const date = useCurrentDate();
    // Get Data
    const [loaded, data] = useFetch(`http://api.aladhan.com/v1/timings/${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}?latitude=${latitude}&longitude=${longitude}&method=5`);



    return(
    <FetchedDataContext.Provider value={[loaded, data]}>
        {props.children}
    </FetchedDataContext.Provider>
    )
}




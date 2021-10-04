import {useEffect, useState} from 'react'

/**
 * Get the Current Date 
 * 
 * @returns {object} date object
 */

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    },[])  

    return  date;
}


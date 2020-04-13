import {useEffect, useState} from 'react'


export const useCurrentDate = (url) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    },[])  

    return  date;
}


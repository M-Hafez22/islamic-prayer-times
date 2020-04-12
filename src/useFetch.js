import {useEffect, useState} from 'react'


export const useFetch = (url) => {
    const [fetcheddata, setFetchedData] = useState({});

    useEffect(() => {
       fetch(url)
        .then(response => response.json())
        .then(data => setFetchedData(data.data))
    }, [url]);

    return  fetcheddata;

}
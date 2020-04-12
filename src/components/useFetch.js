import {useEffect, useState} from 'react'


export const useFetch = (url) => {
    const [fetcheddata, setFetchedData] = useState(null);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
       fetch(url)
        .then(response => response.json())
        .then(data => {
            setFetchedData(data.data)
            setLoaded(true)
        })
    }, [url]);

    return  [Loaded, fetcheddata];

}
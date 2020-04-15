import {useEffect, useState} from 'react'


export const useFetch = (url) => {
    const [fetcheddata, setFetchedData] = useState(null);
    // true if the data is fetched 
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        
       fetch(url)
        .then(response => response.json())
        .then(data => {
            setFetchedData(data.data)
            console.log(data.data)
            setLoaded(true)
        })
    }, [url]);

    return  [Loaded, fetcheddata];
}

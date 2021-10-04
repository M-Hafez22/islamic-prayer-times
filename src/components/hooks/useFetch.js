import {useEffect, useState} from 'react'

/**
 * Fetching data from API
 * 
 * @param {string} url  the URL for the API
 * @returns {[boolean, object]} [the state of the fetching, the fetched data]
 * 
 */

export const useFetch = (url) => {
    const [fetcheddata, setFetchedData] = useState(null);
    // true if the data is fetched 
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('Fetching....')
       fetch(url)
        .then(response => response.json())
        .then(data => {
            setFetchedData(data.data)
            setLoaded(true)
        })
    }, [url]);

    return  [Loaded, fetcheddata];
}

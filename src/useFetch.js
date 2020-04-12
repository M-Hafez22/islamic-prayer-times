import {useEffect} from 'react'


export const useFetch = (url) => {
    useEffect(() => {
       fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
    }, [url])
}
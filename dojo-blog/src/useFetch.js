import { useState, useEffect } from "react"

const useFetch = (url) => {

    // useState is a reactive hook for react to re-render
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    // use effect hook is a way to run code on every render
    // the second argument is an empty array which means the function inside will only run once after the initial render. It controls when the function inside runs
   
    useEffect(() => {
        // fetch function, which means that the returned json file from the first .then will become the input parameter of the second .then
        // wrong endpoint or network error message like server disconnected
        
        const abortCont = new AbortController();

        // use signal to associate with fetch to abort
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then((res) => {
                if (!res.ok)
                {
                    throw Error('could not fetch data from that resource')
                }
                return res.json()}).then((data) => setData(data), setIsLoading(false), setError(null)).catch((err) => {
                    if (err.name === 'AbortError')
                    {
                        console.log('fetch aborted')
                    }
                    else
                    {
                        setError(err.message); 
                        setIsLoading(false)
                    }
                })
        }, 1000)

        // clean up function, which aborts whatever fetch its associated with
        return () => abortCont.abort();

    }, [url])

    
    return {data, isLoading, error}

}

export default useFetch;
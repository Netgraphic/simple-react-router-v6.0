import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if(!res.ok) {
                throw new Error('Error al consumir la api.');
            }

            const data = await res.json();
        
            setData(data);
        } 
        catch(error) {
            setError(error.message);
            setData([]);
        } 
        finally {
            setLoading(false);
        }

        

        // fetch('https://jsonplaceholder.typicode.com/users')
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setUsers(data);
        //   });
    }, []);

    useEffect(() => {    
        getData();    
    }, [getData]);

    return {data, loading, error};
}
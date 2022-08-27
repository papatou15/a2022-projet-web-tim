import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadData() {
            const requestOptions = {
                method: 'GET'
            };
            const response = await fetch(url, requestOptions);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setData(posts);
        }
    
        loadData();
    }, [url]);
    return data;
}
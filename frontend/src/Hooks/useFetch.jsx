import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const requestOptions = {
                method: 'GET'
            }

            const response = fetch(url, requestOptions);

            if(!response.ok) {
                return;
            
                
            }   
            const posts = response.json();
            setData(posts);
        }
        loadData();
    }, [url]);

    return data;
}
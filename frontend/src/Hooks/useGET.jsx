import { useEffect, useState } from "react";

export default function useGET(url){
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadData() {
            let xmlHttp = new XMLHttpRequest();
            await xmlHttp.open( "GET", url, true);
            await xmlHttp.send(null);
            const response = xmlHttp.responseText;
            if(!response) {
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
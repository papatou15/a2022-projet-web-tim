import { useEffect, useState } from "react";
import useFetch from './useFetch';

export default async function useChargerPage(){
    const [data, setData] = useState([]);
    const pagesData = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/pages');
    const sessionsData = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/session');
    const fetchedData = [pagesData, sessionsData];

    setData(fetchedData);
    return data;
}
import { useEffect } from "react";

export default function useChargerSite(setSiteData,isLoaded, setIsLoaded){
    useEffect(() => {
        if (!isLoaded){
            Promise.all([
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/pages').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/session').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/cours?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/enseignant?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/tim/v1/settings/logo').then(resp => resp.json()),
    
            ]).then(data => {
                setSiteData({
                    pages: data[0],
                    sessions: data[1],
                    cours: data[2],
                    enseignants: data[3],
                    logo: data[4]
                });
                console.log(isLoaded);
                setIsLoaded(true);
            });
        }
    }, [setSiteData, isLoaded, setIsLoaded]);
}
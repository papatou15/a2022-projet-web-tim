import { useEffect } from "react";

export default function useChargerSite(setSiteData, isLoaded, setIsLoaded){
    useEffect(() => {
        if (!isLoaded){
            Promise.all([
                fetch('https://timm184.sg-host.com/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/session').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/cours?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/enseignant?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/tim/v1/settings/logo').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/wp-json/wp/v2/projet?per_page=100').then(resp => resp.json()),
    
            ]).then(data => {
                setSiteData({
                    pages: data[0],
                    sessions: data[1],
                    cours: data[2],
                    enseignants: data[3],
                    logo: data[4],
                    projets: data[5]
                });
                setIsLoaded(true);
            });
        }
    }, [setSiteData, isLoaded, setIsLoaded]);
}
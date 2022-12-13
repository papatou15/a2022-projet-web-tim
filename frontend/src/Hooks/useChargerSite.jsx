import { useEffect } from "react";

export default function useChargerSite(setSiteData, isLoaded, setIsLoaded){
    useEffect(() => {
        if (!isLoaded){
            Promise.all([
                fetch('https://timm184.sg-host.com/backend/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/session').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/cours?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/enseignant?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/tim/v1/settings/logo').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/projet?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/pages?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/emplois?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/programmesuniversita?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/typecours?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/reseausocial?per_page=100').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/svg').then(resp => resp.json()),
                fetch('https://timm184.sg-host.com/backend/wp-json/wp/v2/genresections?per_page=100').then(resp => resp.json()),
    
            ]).then(data => {
                setSiteData({
                    menu: data[0],
                    sessions: data[1],
                    cours: data[2],
                    enseignants: data[3],
                    logo: data[4],
                    projets: data[5],
                    pages: data[6],
                    carrieres: data[7],
                    programmes_uni: data[8],
                    type_cours: data[9],
                    reseaux_sociaux: data[10],
                    svg: data[11],
                    genre_sections: data[12]
                });
                setIsLoaded(true);
            });
        }
    }, [setSiteData, isLoaded, setIsLoaded]);
}
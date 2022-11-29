import { useContext, useEffect, useState } from 'react';
import TitreSection from '../Composants/Sections/General/TitreSection';
import TexteSection from '../Composants/Sections/General/TexteSection';
import SousTitreSection from '../Composants/Sections/General/SousTitreSection';
import VagueSection from '../Composants/Sections/General/VagueSection';
import { DataContext } from '../Context/DataContext';
import './Section.scss';

export default function Section({section}){


    const {genre_sections} = useContext(DataContext);

    const [SectionComponent, setSectionComponent] = useState(null);
    useEffect(() => {
        const slugSection = getGenreSectionSlug();
        setSectionComponent(() => getSection(slugSection));
    }, [])

    const getGenreSectionSlug = () => {
        const sectionTypeID = section.genre_section;
        const genreSection = genre_sections.filter((genre) => {
            if (genre.id === sectionTypeID) return true;
            return false;
        })
        const slugGenre = genreSection[0].nom_genre;
        return slugGenre;
    }

    const getSection = (sectionSlug) => {
        return typesSections[sectionSlug];
    }
    
    const typesSections = {
        "sectionTitre": <TitreSection>{section.titre}</TitreSection>,
        "sectionTexte": <TexteSection/>,
        "sectionSousTitre": <SousTitreSection/>,
        "sectionVagues": <VagueSection/>,
    }

    return (
        <div className="Section">
            {
                SectionComponent
            }
        </div>
    );
}
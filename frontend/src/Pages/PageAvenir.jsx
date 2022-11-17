import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import TitreSection from '../Composants/TitreSection';
import './PageAvenir.scss';
import SousTitre from '../Composants/SousTitre';
import ListeCarrieres from '../Composants/ListeCarrieres';
import ListeProgrammesUni from '../Composants/ListeProgrammesUni';

export default function PageAvenir({id}){

    const {pages} = useContext(DataContext);
    const pageAvenir = pages.filter((page) => page.id === id)[0];

    return (
        <main className="PageAvenir">
            <div className='emplois-stages section'>
                <TitreSection>{pageAvenir.titre_sections[0]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[0]}</SousTitre>
                <div className='paragraphes'>
                    <p>{pageAvenir.paragraphes[0]}</p>
                    <p>{pageAvenir.paragraphes[0]}</p>
                </div>
                <SousTitre>{pageAvenir.sous_titres[1]}</SousTitre>
                <ListeCarrieres/>
            </div>
            <div className='universite section'>
                <svg id="vague3" viewBox='100 100 100 100' preserveAspectRatio="xMinYMid meet">
                    <path d="M0,210.5c92.65-42.08,234.69-90.01,402-74,212.92,20.37,243.57,122.93,466,163,227.67,41.01,299.62-47.69,594-46,199.1,1.14,360.27,81.82,459,114l-1-367.5H.5L0,210.5Z"/>
                </svg>
                <TitreSection>{pageAvenir.titre_sections[1]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[2]}</SousTitre>
                <ListeProgrammesUni/>
            </div>
        </main>
    );
}
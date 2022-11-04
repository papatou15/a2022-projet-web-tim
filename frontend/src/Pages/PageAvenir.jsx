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
            <section className='emplois-stages'>
                <TitreSection>{pageAvenir.titre_sections[0]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[0]}</SousTitre>
                <p>{pageAvenir.paragraphes[0]}</p>
                <SousTitre>{pageAvenir.sous_titres[1]}</SousTitre>
                <ListeCarrieres/>
            </section>
            <section className='universite'>
                <TitreSection>{pageAvenir.titre_sections[1]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[2]}</SousTitre>
                <ListeProgrammesUni/>
            </section>
        </main>
    );
}
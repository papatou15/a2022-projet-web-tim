import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TitreSection from '../Composants/TitreSection';
import './PageAvenir.scss';
import SousTitre from '../Composants/SousTitre';
import ListeCarrieres from '../Composants/ListeCarrieres';
import ListeProgrammesUni from '../Composants/ListeProgrammesUni';
import TransitionVague from '../Decorations/TransitionVague';

export default function PageAvenir({id}){

    const {pages} = useContext(DataContext);
    const pageAvenir = pages.filter((page) => page.id === id)[0];

    return (
        <main className="PageAvenir">
            <section className='emplois-stages section'>
                <TitreSection>{pageAvenir.titre_sections[0]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[0]}</SousTitre>
                <p className='texte-stage'>{pageAvenir.paragraphes[0]}</p>
                <SousTitre>{pageAvenir.sous_titres[1]}</SousTitre>
                <ListeCarrieres/>
            </section>
            <TransitionVague couleurBackgroundTransition={Couleurs.baseColor} 
                             couleurCourbe={Couleurs.couleurPrimaire}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={180}
                             transitionY={-2}/>
            <section className='universite section'>
                <TitreSection>{pageAvenir.titre_sections[1]}</TitreSection>
                <SousTitre>{pageAvenir.sous_titres[2]}</SousTitre>
                <ListeProgrammesUni/>
            </section>
            <TransitionVague couleurBackground={Couleurs.baseColor} 
                             couleurCourbe={Couleurs.couleurPrimaire}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={-2}
                             isTransparent={true}/>
        </main>
    );
}
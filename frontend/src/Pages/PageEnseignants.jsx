import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { useRef, useState } from 'react';
import {CarteGlissante} from '../Composants/CarteGlissante';
import TitreSection from '../Composants/Sections/General/TitreSection';
import Dialog from '../Composants/Dialog';
import ListeEnseignants from '../Composants/ListeEnseignants';
import './PageEnseignants.scss';
import Couleurs from '../Variables/Couleurs.scss';
import Formes from '../Variables/Formes.scss';
import TransitionVague from '../Decorations/TransitionVague';
import EnseignantsSection from '../Composants/Sections/Enseignants/EnseignantsSection';

export default function PageEnseignants({id}){

    const {pages} = useContext(DataContext);
    const pageEnseignant = pages.filter((page) => page.id === id)[0];

    return (
        <main className="PageEnseignants">
            <TransitionVague
                couleurBackgroundTransition={Couleurs.couleurPrimaire} 
                couleurCourbe={Couleurs.baseColor}  
                minHeight={'150px'} 
                clipPath={Formes.vagueSimpleMobile} 
                isSimple={true}
                rotationX={180}
                transitionY={-50}
                isTransparent={false}
                position={"absolute"}
            />
            <TitreSection backgroundColor={Couleurs.couleurPrimaire} >{pageEnseignant.titre_sections[0]}</TitreSection>
            <EnseignantsSection
                backgroundColor={Couleurs.baseColor}
            /> 
            <TransitionVague 
                couleurBackground={Couleurs.footerColor} 
                couleurCourbe={Couleurs.baseColor}  
                minHeight={'100px'} 
                clipPath={Formes.vagueSimpleMobile} 
                isSimple={true}
                rotationX={0}
                transitionY={-2}
                isTransparent={true}
            />
        </main>
    );
}
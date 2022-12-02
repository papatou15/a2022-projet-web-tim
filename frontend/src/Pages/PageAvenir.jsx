import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TitreSection from '../Composants/Sections/General/TitreSection';
import './PageAvenir.scss';
import ListeCarrieres from '../Composants/Sections/Avenir/ListeCarrieres';
import ListeProgrammesUni from '../Composants/Sections/Avenir/ListeProgrammesUni';
import TransitionVague from '../Decorations/TransitionVague';
import TexteSection from '../Composants/Sections/General/TexteSection';
import SousTitreSection from '../Composants/Sections/General/SousTitreSection';

export default function PageAvenir({id}){

    const {pages} = useContext(DataContext);
    const pageAvenir = pages.filter((page) => page.id === id)[0];

    return (
        <main className="PageAvenir">
            <TransitionVague
                couleurBackgroundTransition={Couleurs.couleurPrimaire} 
                couleurCourbe={Couleurs.couleurSecondaire}  
                minHeight={'300px'} 
                clipPath={Formes.vagueSimpleMobile} 
                isSimple={true}
                rotationX={180}
                transitionY={-50}
                isTransparent={false}
                position={"absolute"}
            />
            <TitreSection backgroundColor={Couleurs.couleurPrimaire}
                          paddingTop="75px">
                {pageAvenir.titre_sections[0]}
            </TitreSection>

            <SousTitreSection 
                color='white'
                backgroundColor={Couleurs.couleurSecondaire}
                textAlign='left'
            >
                    {pageAvenir.sous_titres[0]}
            </SousTitreSection>

            <TexteSection 
                color='white' 
                backgroundColor={Couleurs.couleurSecondaire}
            >
                    {pageAvenir.paragraphes[0]}
            </TexteSection>

            <SousTitreSection 
                color='white' 
                backgroundColor={Couleurs.couleurSecondaire}
            >
                    {pageAvenir.sous_titres[1]}
            </SousTitreSection>

            <ListeCarrieres 
                backgroundColor={Couleurs.couleurSecondaire}
                color={'white'}
            />

            <TransitionVague 
                couleurBackgroundTransition={Couleurs.couleurSecondaire} 
                couleurCourbe={Couleurs.couleurTierce}  
                minHeight={'200px'} 
                clipPath={Formes.vagueAccueil} 
                isSimple={false}
                rotationX={180}
                transitionY={-2}
                position={"relative"}
            />

            <TitreSection backgroundColor={Couleurs.couleurTierce}>
                {pageAvenir.titre_sections[1]}
            </TitreSection>

            <SousTitreSection
                color='white'
                backgroundColor={Couleurs.couleurTierce}
            >
                    {pageAvenir.sous_titres[2]}
            </SousTitreSection>

            <ListeProgrammesUni backgroundColor={Couleurs.couleurTierce}/>
            
            <TransitionVague 
                couleurBackground={Couleurs.footerColor} 
                couleurCourbe={Couleurs.couleurTierce}  
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
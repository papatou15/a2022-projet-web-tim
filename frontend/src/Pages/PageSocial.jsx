import './PageSocial.scss';

import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'

import TransitionVague from '../Decorations/TransitionVague';
import TitreSection from '../Composants/Sections/General/TitreSection';
import EvenementsSection from '../Composants/Sections/Social/EvenementsSection';
import CommunauteSection from '../Composants/Sections/Social/CommunauteSection';
import MaisonneuveSection from '../Composants/Sections/Social/MaisonneuveSection';

export default function PageSocial(props){

    // const location = useLocation();

    // const evenementsRef = useRef(null);
    // const maisonneuveRef = useRef(null);
    // const communauteRef = useRef(null);

    // const sectionsReferences = {
    //     '#evenements' : evenementsRef,
    //     '#maisonneuve' : maisonneuveRef,
    //     '#communaute' : communauteRef
    // }

    // useEffect(() => {
    //     if (location.hash) {
    //         const currentSection = sectionsReferences[location.hash];
    //         currentSection.current.scrollIntoView();
    //     }
    // }, [])

    return (
        <main className="PageSocial">
            <TransitionVague
                couleurBackground={Couleurs.couleurPrimaire} 
                couleurCourbe={Couleurs.couleurSecondaire}  
                minHeight={'150px'} 
                clipPath={Formes.vagueSimpleMobile} 
                isSimple={true}
                rotationX={180}
                transitionY={-100}
                isTransparent={true}
                position={"absolute"}
                top={0}
            />
            <TitreSection backgroundColor={Couleurs.couleurPrimaire}>Les ÉVÉNEMENTS</TitreSection>
            <EvenementsSection
                texte1={"Dans le cadre de la technique d'intégration en multimédia, nous fesons aussi des sorties en classe dans certain cours. Par exemple, dans le cours de Technologie Émergente, il y a une sortie nommé OASIS Immersion qui permet aux étudiants de voir des spectacles de lumières."}   
                texte2={"Un autre événement dans lequel le TIM de Maisonneuve participe est le Game Jam. Un évènement hors du collège dans lequelle des groupes étudiants de plusieurs collèges participe à une compétition de création d'un jeu vidéo."}
                
                // img1={}
                // img2={}

                alt1={"Sorties"}
                alt2={"GameJams"}
            />

            <TransitionVague
                couleurBackground={Couleurs.couleurTierce}
                couleurCourbe={Couleurs.couleurSecondaire}  
                minHeight={'250px'} 
                clipPath={Formes.vagueCours} 
                isSimple={true}
                rotationX={0}
                transitionY={-2}
                isTransparent={true}
            />
            <TitreSection backgroundColor={Couleurs.couleurTierce}>La COMMUNAUTÉ</TitreSection>
            
            <CommunauteSection
                backgroundColor={Couleurs.couleurTierce}

                carte1Titre={"Comité"}
                carte1Texte={"Au TIM, nous avons aussi un comité étudiants qui se charge de préparer les évènements qui seront seulement pour les étudiants du TIM. Vous pouvez tous vous y joindre, peu importe vorte année."}

                carte2Titre={"Centre d'aide"}
                carte2Texte={"Un groupe disponible pour aider les étudiants du TIM pendant leur parcour collégiens."}

                carte3Titre={"Discord"}
                carte3Texte={"Nous avons aussi un serveur Discord entre les étudiants pour s'entraider durant nos sessions ainsi que faire connaissance."}
            />

            <TransitionVague 
                couleurBackground={Couleurs.couleurTierce} 
                couleurCourbe={Couleurs.couleurQuaternaire}  
                minHeight={'250px'}
                clipPath={Formes.vagueAccueil} 
                isSimple={true}
                rotationX={180}
                transitionY={-2}
                isTransparent={true}                 
            />
            <TitreSection backgroundColor={Couleurs.couleurQuaternaire}>MAISONNEUVE</TitreSection>
            <MaisonneuveSection
                backgroundColor={Couleurs.couleurQuaternaire}

                texte1={"Voici la page web du site du collège de Maisonneuve. Cliquez "}
                texte2={"Voici la page web de la technique d'intégration en multimédia sur la page de Maisonneuve. Cliquez "}

                lien1={"https://www.cmaisonneuve.qc.ca/"}
                lien2={"https://fc.cmaisonneuve.qc.ca/formations/integration-multimedia/#information-generale-1-tab"}

                lienPlaceholder1={"ici."}
                lienPlaceholder2={"ici."}

                img={"https://cdn.discordapp.com/attachments/1012793479648251914/1044344188952641557/persofinal-balloon.png"}
            />
            <TransitionVague couleurBackground={Couleurs.footerColor} 
                             couleurCourbe={Couleurs.couleurQuaternaire}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={-2}
                             isTransparent={true}/>
        </main>
    );
}
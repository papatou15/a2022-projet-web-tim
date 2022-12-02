import './PageAccueil.scss';

import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'

import TransitionVague from '../Decorations/TransitionVague';
import SectionCoursAccueil from '../Composants/Sections/Accueil/SectionCoursAccueil';
import HeaderAccueil from '../Composants/Sections/Accueil/HeaderAccueil';
import SousTitreAccueil from '../Composants/Sections/General/SousTitreAccueil';
import AvenirAccueil from '../Composants/Sections/Accueil/AvenirAccueil';
import ProjetsAccueil from '../Composants/Sections/Accueil/ProjetsAccueil';
import SocialAccueil from '../Composants/Sections/Accueil/SocialAccueil';
import EnseignantsAccueil from '../Composants/Sections/Accueil/EnseignantsAccueil';

export default function PageAccueil({id}){ 

    return (
        <main className="PageAccueil">
            <HeaderAccueil 
                titre={'TIM Maisonneuve'} 
                slogan={'L’univers du web et du jeu vidéo au bout des doigts!'}
                videoSource={'http://timm184.sg-host.com/wp-content/uploads/2022/11/VideoCegepFinal.mp4'} 
                couleurBanniere={'rgba(36, 142, 166, 0.253)'}
                couleurCourbe={Couleurs.couleurSecondaire}
            />
            <SousTitreAccueil 
                premierMot={'Tes'} 
                secondMot={'COURS'} 
                backgroundColor={Couleurs.couleurSecondaire} 
                couleurTexte={'white'}
                estSurLaGauche={false}
            />
            <SectionCoursAccueil 
                backgroundColor={Couleurs.couleurSecondaire} 
                boutonTexte={'En savoir plus'}
            />
            <SousTitreAccueil 
                premierMot={'Ton'} 
                secondMot={'AVENIR'} 
                backgroundColor={Couleurs.couleurSecondaire} 
                couleurTexte={'white'}
                estSurLaGauche={true}
            />
            <AvenirAccueil
                carte1Titre={'En Entreprise'} 
                carte1Texte={'Voici quelques exemples de choix de carrière possible avec un diplôme en Intégration Multimédia'}

                carte2Titre={"À l'univerité"}  
                carte2Texte={'Voici quelques programmes Universitaire accessibles à la fin de ton parcour en Intégration Multimédia'}

                carte3Titre={'En stage'}
                carte3Texte={'Voici quelques possiblitées de stage à la fin de ton parcour en Intégration Multimédia'}

                boutonTexte={'En savoir plus'}
            />
            <TransitionVague couleurBackgroundTransition={Couleurs.couleurTierce} 
                             couleurCourbe={Couleurs.couleurSecondaire}  
                             minHeight={'200px'} 
                             clipPath={Formes.vagueAccueil} 
                             isSimple={false}
                             rotationX={0}
                             transitionY={-2}
                             position={"relative"}
            />
            <SousTitreAccueil
                premierMot={'Ton aperçu'}
                secondMot={'des PROJETS'}
                couleurTexte={'white'}
                backgroundColor={Couleurs.couleurTierce} 
            />
            <ProjetsAccueil
                boutonTexte={'En voir plus!'}
            />
            <SousTitreAccueil
                premierMot={'Ta vie'}
                secondMot={'ÉTUDIANTE'}
                couleurTexte={'white'}
                backgroundColor={Couleurs.couleurTierce} 
                estSurLaGauche={true}
            />
            <SocialAccueil
                titre1={'Les Événements'}
                boutonTexte1={'Voir les événements'}
                titre2={'Communauté'}
                boutonTexte2={'En apprendre plus'}

                titre3={'Maisonneuve'}
                boutonTexte3={'Consulter le collège'}
            />
            <TransitionVague couleurBackgroundTransition={Couleurs.couleurTierce} 
                             couleurCourbe={Couleurs.couleurQuaternaire}  
                             minHeight={'200px'} 
                             clipPath={Formes.vagueAccueil} 
                             isSimple={false}
                             rotationX={180}
                             transitionY={-2}
                             position={"relative"}
            />
            <SousTitreAccueil
                premierMot={'Tes'}
                secondMot={'ENSEIGNANTS'}
                couleurTexte={'white'}
                backgroundColor={Couleurs.couleurQuaternaire} 
                estSurLaGauche={false}
            />
            <EnseignantsAccueil
                boutonTexte={'Voir tous les profs'}
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
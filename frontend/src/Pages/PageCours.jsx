import './PageCours.scss';

import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'

import TransitionVague from '../Decorations/TransitionVague';
import CoursSection from '../Composants/Sections/Cours/CoursSection';
import TitrePage from '../Composants/Sections/General/TitrePage';

export default function PageCours(props){
    return (
        <main className="PageCours">
            <TransitionVague 
                couleurBackground={Couleurs.baseColor} 
                couleurCourbe={Couleurs.couleurPrimaire}  
                minHeight={'250px'} 
                clipPath={Formes.vagueCours} 
                isSimple={true}
                rotationX={0}
                transitionY={-2}
                isTransparent={true}
                position={"absolute"}
                top={0}
            />
            <TitrePage couleur={'white'}>Les cours</TitrePage>
            <CoursSection
                couleurTitreSession='white'
                backgroundColor={Couleurs.baseColor}
            />
            <TransitionVague 
                couleurBackground={Couleurs.footerColor} 
                couleurCourbe={Couleurs.couleurQuaternaire}  
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
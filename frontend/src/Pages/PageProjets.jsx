import './PageProjets.scss';

import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'

import TransitionVague from '../Decorations/TransitionVague';
import TitrePage from '../Composants/Sections/General/TitrePage';
import ProjetsSection from '../Composants/Sections/Projets/ProjetsSection';

export default function PageProjets(props){
    return (
        <main className="PageProjets">
            <TransitionVague 
                couleurBackground={Couleurs.baseColor} 
                couleurCourbe={Couleurs.couleurPrimaire}  
                minHeight={'400px'} 
                clipPath={Formes.vagueProjets} 
                isSimple={true}
                rotationX={0}
                transitionY={-2}
                isTransparent={true}
                position={'absolute'}
                top={0}
            />
            <TitrePage>Les projets</TitrePage>
            <ProjetsSection
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
import './PageProjets.scss';
import CarteProjet from '../Composants/CarteProjet';
import Filtre from '../Composants/Filtre';
import { DataContext } from '../Context/DataContext';
import { useContext, useState, useRef } from 'react';
import TitreSection from '../Composants/Sections/TitreSection';
import useCliqueExterieur from '../Hooks/useCliqueExterieur';
import Footer from '../Composants/Footer';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TransitionVague from '../Decorations/TransitionVague';

export default function PageProjets(props){
    const data = useContext(DataContext);
    const {projets, type_cours} = useContext(DataContext);
    const [carteOpenState, setCarteOpenState] = useState('');
    const [filtre, setFiltre] = useState([]);

    const filtrerProjets = (projet) => {
        if (filtre.length === 0) return true;
        const types = projet.type_du_projet;
        const contientFiltre =  types.map(type => {
            if (filtre.some(row => row.includes(type.ID))) {
                return true;
            }
        }).includes(true);
        return contientFiltre;
    }

    return (
        <main className="PageProjets">
            <TransitionVague couleurBackground={Couleurs.baseColor} 
                             couleurCourbe={Couleurs.couleurPrimaire}  
                             minHeight={'400px'} 
                             clipPath={Formes.vagueProjets} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={-2}
                             isTransparent={true}
                             position={'absolute'}
                             top={0}/>
            <TitreSection>Les projets</TitreSection>
            <Filtre filtre={filtre} setFiltre={setFiltre} options={type_cours} placeholder={"Filtrer les projets"}/>
            <div className="listeProjets">
                {
                    projets.filter(filtrerProjets).map(
                        projet => <CarteProjet key={projet.id} projet={projet} id={projet.id} titre={projet.titre} type={projet.type_du_projet[0].post_title} cours={projet.cours_lies ? projet.cours_lies.map( cours_lies => cours_lies.titre ) : "Personnel"} auteurs={projet.auteurs} image={projet.images.map( images => images.guid)} carteOpenState={carteOpenState} setCarteOpenState={setCarteOpenState}/>
                    )
                }
            </div>
            <TransitionVague couleurBackground={Couleurs.couleurQuaternaire} 
                             couleurCourbe={Couleurs.baseColor}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={2}
                             isTransparent={true}
                             position={'relative'}
                             top={'48px'}/>
        </main>
    );
}
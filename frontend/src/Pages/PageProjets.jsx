import './PageProjets.scss';
import CarteProjet from '../Composants/CarteProjet';
import Filtre from '../Composants/Filtre';
import { DataContext } from '../Context/DataContext';
import { useContext, useState, useRef } from 'react';
import TitreSection from '../Composants/Sections/TitreSection';
import useCliqueExterieur from '../Hooks/useCliqueExterieur';
import Carrousel from '../Navigation/Carrousel';
import { CarteGlissante } from '../Composants/CarteGlissante';
import Footer from '../Composants/Footer';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TransitionVague from '../Decorations/TransitionVague';

export default function PageProjets(props){
    const data = useContext(DataContext);
    const {projets, type_cours} = useContext(DataContext);
    const [carteOpenState, setCarteOpenState] = useState('');
    const [filtre, setFiltre] = useState([]);

    const [carteAgrandie, setCarteAgrandie] = useState(null);

    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [detailCoursOpen, setDetailCoursOpen] = useState(false);

    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDetailCoursOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
    }


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

    console.log(carteAgrandie);

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
                        projet => <CarteProjet key={projet.id} 
                        projet={projet} id={projet.id} 
                        titre={projet.titre} 
                        type={projet.type_du_projet[0].post_title} 
                        cours={projet.cours_lies ? projet.cours_lies.map( cours_lies => cours_lies.titre ) : "Personnel"} 
                        auteurs={projet.auteurs}
                        image={projet.images.map( images => images.guid)} 
                        carteOpenState={carteOpenState} 
                        setCarteOpenState={setCarteOpenState}
                        setDetailsOpen={setDetailsOpen}
                        detailCoursOpen={detailCoursOpen}
                        setCarteAgrandie={setCarteAgrandie}
                        />
                    )
                }
            </div>
            <TransitionVague couleurBackground={Couleurs.footerColor} 
                             couleurCourbe={Couleurs.couleurQuaternaire}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={2}
                             isTransparent={true}
                             position={'relative'}
                             top={'48px'}/>
            <CarteGlissante ref={carteGlissanteRef} isOpen={carteGlissanteOpen} onCloseButtonClicked={() => {setDetailsOpen(false)}}>
                {
                    carteAgrandie ?
                    <div className='carte-glissante-projet'>
                        <div className='curve'></div>
                        <div className="projet-carrousel">
                        {
                            (carteAgrandie.projet.images) ?
                            <Carrousel images={carteAgrandie.projet.images}/>
                            :
                            <></>
                        }
                        </div>
                        <div className="projet-nom">
                            <h2>{carteAgrandie.titre}</h2>
                        </div>
                        <div className="projet-description">
                            <h3>Description</h3>
                            <p>{carteAgrandie.projet.description}</p>
                        </div>
                        <div className="projet-auteur">
                            <h3>Auteur</h3>
                            <p>{carteAgrandie.auteurs}</p>
                        </div>
                    </div>
                    :
                    <></>
                }
            </CarteGlissante> 
        </main>
    );
}
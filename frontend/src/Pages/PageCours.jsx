import './PageCours.scss';
import ListeSessions from './ListeSessions';
import { useContext, useEffect, useRef, useState } from 'react';
import { CarteGlissante } from '../Composants/CarteGlissante';
import { DataContext } from '../Context/DataContext';
import Filtre from '../Composants/Filtre';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TransitionVague from '../Decorations/TransitionVague';
import { getCoursFromID } from '../utils/timapi-utils';
import Carrousel from '../Navigation/Carrousel';

export default function PageCours(props){

    const {sessions, type_cours} = useContext(DataContext);
    const [itemFiltre, setItemFiltre] = useState([]);

    const [carteAgrandie, setCarteAgrandie] = useState(null);

    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [detailCoursOpen, setDetailCoursOpen] = useState(false);

    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDetailCoursOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
    }

    console.log(carteAgrandie);

    return (
        <main className="PageCours">
            <TransitionVague couleurBackground={Couleurs.baseColor} 
                             couleurCourbe={Couleurs.couleurPrimaire}  
                             minHeight={'250px'} 
                             clipPath={Formes.vagueCours} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={-2}
                             isTransparent={true}/>
            <h1>Les cours</h1>
            <Filtre filtre={itemFiltre} setFiltre={setItemFiltre} options={type_cours} placeholder={"Filtrer les cours"}/>
            {
                (sessions != null) 
                ?
                <ListeSessions sessions={sessions} 
                            filtre={itemFiltre} 
                            carteAgrandie={carteAgrandie} 
                            setCarteAgrandie={setCarteAgrandie} 
                            detailCoursOpen={detailCoursOpen}
                            setDetailsOpen={setDetailsOpen}
                />
                :
                <p>Loading</p>
            }


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

            <CarteGlissante ref={carteGlissanteRef} isOpen={carteGlissanteOpen} onCloseButtonClicked={() => {setDetailsOpen(false)}}>
                {
                    carteAgrandie ?
                    <div className='carte-glissante-cours'>
                        <div className='curve'></div>
                        <div className="cours-carrousel">
                        {
                            (carteAgrandie.images) ?
                            <Carrousel images={carteAgrandie.images}/>
                            :
                            <></>
                        }
                        </div>
                        <div className="cours-nom">
                            <h2>{carteAgrandie.titre}</h2>
                        </div>
                        <div className="cours-description">
                            <h3>Description</h3>
                            <p>{carteAgrandie.description}</p>
                        </div>
                        <div className="cours-projets-relies">

                        </div>
                    </div>
                    :
                    <></>
                }
            </CarteGlissante> 

        </main>
    );
}
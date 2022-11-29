import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import { useState, useRef } from 'react';
import Filtre from '../../Filtre';
import ListeSessions from '../../../Pages/ListeSessions';
import Carrousel from '../../../Navigation/Carrousel';
import { CarteGlissante } from '../../CarteGlissante';

import './CoursSection.scss';


export default function CoursSection({couleurTitreSession="white", backgroundColor="white"}){

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

    const styleCustom = {
        color: couleurTitreSession,
        backgroundColor: backgroundColor
    }

    return (
        <div style={styleCustom} className="CoursSection">
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
        </div>
    );
}
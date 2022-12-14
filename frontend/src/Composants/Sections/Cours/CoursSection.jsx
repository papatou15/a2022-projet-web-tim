import { DataContext } from '../../../Context/DataContext';
import { useState, useRef, useContext } from 'react';
import Filtre from '../../Filtre';
import ListeSessions from '../../../Pages/ListeSessions';
import Carrousel from '../../../Navigation/Carrousel';
import { CarteGlissante } from '../../CarteGlissante';
import Dialog from '../../Dialog';

import './CoursSection.scss';
import useFooter from '../../../Hooks/useFooter';


export default function CoursSection({couleurTitreSession="white", backgroundColor="white"}){

    const {sessions, type_cours, projets} = useContext(DataContext);
    const data = useContext(DataContext);
    const [itemFiltre, setItemFiltre] = useState([]);

    const [carteAgrandie, setCarteAgrandie] = useState(null);

    const [dialogOpen, setDialogOpen] = useState(null);

    useFooter(false);

    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [detailCoursOpen, setDetailCoursOpen] = useState(false);

    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDetailCoursOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
        setDialogOpen(isOpen);
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
            <Dialog isActive={dialogOpen} onOutsideClick={() => setDialogOpen(false)} exceptionRef={carteGlissanteRef}>
                {
                    carteAgrandie ?
                    <div className='dialogCours'>
                        <div className="cours-details">
                            <div className="curve1"></div>
                            <div className="cours-carrousel">
                            {
                                (carteAgrandie.images) ?
                                <Carrousel images={carteAgrandie.images}/>
                                :
                                <></>
                            }
                            </div>
                            <div className="cours-description">
                                <h3>{carteAgrandie.titre}</h3>
                                <h3>Description</h3>
                                <p>{carteAgrandie.description}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
                
            </Dialog>
        </div>
    );
}
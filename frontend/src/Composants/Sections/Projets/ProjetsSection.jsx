import './ProjetsSection.scss';

import Filtre from '../../Filtre';
import CarteProjet from '../../CarteProjet';
import { useState, useEffect, useRef, useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import Carrousel from '../../../Navigation/Carrousel';
import { CarteGlissante } from '../../CarteGlissante';
import Dialog from '../../Dialog';
import { NavLink } from 'react-router-dom';
import useFooter from '../../../Hooks/useFooter';

export default function ProjetsSection({backgroundColor="white"}){

    const {projets, type_cours} = useContext(DataContext);
    const [carteOpenState, setCarteOpenState] = useState('');
    const [filtre, setFiltre] = useState([]);

    useFooter(false);

    const [carteAgrandie, setCarteAgrandie] = useState(null);

    const [dialogOpen, setDialogOpen] = useState(null);

    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [detailCoursOpen, setDetailCoursOpen] = useState(false);

    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDetailCoursOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
        setDialogOpen(isOpen);
    }

    const [isFilterPossible, setIsFilterPossible] = useState(false);

    useEffect(() => {
        if (projets.filter(filtrerProjets).length === 0) {
            setIsFilterPossible(true);
        }
        else {
            setIsFilterPossible(false);
        }
    }, [filtre]);


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

    const styleCustom = {
        backgroundColor: backgroundColor
    }

    return (
        <div style={styleCustom} className="ProjetsSection">
            <Filtre filtre={filtre} setFiltre={setFiltre} options={type_cours} placeholder={"Filtrer les projets"}/>
            {
                !isFilterPossible ?
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
            :
            <div className='filtre-impossible'><p>Aucun projets ne répond à ce critère :|</p></div>
            }
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
            <Dialog isActive={dialogOpen} onOutsideClick={() => setDialogOpen(false)} exceptionRef={carteGlissanteRef}>
                {
                    carteAgrandie ?
                    
                    <div className="infoProjet">
                        <h2>{carteAgrandie.titre}</h2>
                        {/* <p><b>Fait par: </b>{carteAgrandie.auteurs}</p> */}
                        <div className="upperSection">
                            
                            {
                                (carteAgrandie.projet.images) ?
                                <Carrousel images={carteAgrandie.projet.images}/>
                                :
                                <></>
                            }
                            <div className='auteursProjets'>
                                <b>Fait par: </b>
                                {carteAgrandie.auteurs.map(unAuteur => {return(<NavLink key={unAuteur} to="" className="unAuteur">{unAuteur}</NavLink>)})}
                            </div>
                        </div>
                        <div className="sectionInfos">
                            <p><b>Description du projet:</b><br /><br /><span>{carteAgrandie.projet.description}</span></p>
                            <div className="coursReliesProjet">
                                <h4>Cours reliés</h4>
                                <div className='listeCoursRelies'>
                                    {
                                        carteAgrandie.cours != "Personnel" ? carteAgrandie.cours.map(unCours => {return(<NavLink key={unCours} to="../galerie-des-cours" className="coursProjetLien">{unCours}</NavLink>)}) : "Personnel"
                                    }
                                </div>
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
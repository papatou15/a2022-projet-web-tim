import './CarteProjet.scss';
import { useContext, useState, useEffect, useRef } from 'react';
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import useCliqueExterieur from '../Hooks/useCliqueExterieur';

import { NavLink, useLocation } from 'react-router-dom';


export default function CarteProjet({id, projet, titre, type, cours, auteurs, image, carteOpenState, setCarteOpenState}){
    const [expanderState, setExpanderState] = useState(false);

    useEffect(() => {
        if (expanderState && carteOpenState !== id)
        {
            setExpanderState(false);
        }
    }, [carteOpenState])

    const infoRef = useRef(null);
    const carteProjetRef = useRef(null)

    useCliqueExterieur(infoRef, () => {setExpanderState(false);}, carteProjetRef);

    const curLocation = useLocation();
    
    return(
        <div className="groupeCarteProjet" expanderstate={expanderState ? "true" : "false"}>
            <ExpanderButton onClick={() => {(curLocation.pathname === "/galerie-des-projets") ? setExpanderState(!expanderState) : setExpanderState(false); setCarteOpenState(id);}}>
                <div className="carteProjet">
                    <div className="curve1"></div>
                    <div className="curve2"></div>
                    <div className="containerImgProjet">
                        <div className="bgImage" style={{backgroundImage: "url(" + image[0] + ")"}}></div>
                        <img src={image[0]} alt="Image du projet" className="imgProjet"/>
                    </div>
                    <div className="titreProjet">
                        <h4>{titre}</h4>
                    </div>
                    <div className="descProjet">
                        <p className='type-projet'><b>Type - </b><span>{type}</span></p>
                        <p className='cours'><b>Cours - </b>{cours != "Personnel" ? cours.map(unCours => {return(<span key={unCours.ID} className="simpleCours">{unCours}</span>)}) : "N/A"}</p>
                    </div>
                    <p className='auteur'><b>Auteur - </b>{auteurs.map(unAuteur => {return(<span>{unAuteur}</span>)})}</p>
                </div>
            </ExpanderButton>
            
            {
                // Vérifie si le browser est dans la page des projets.
                // Affiche la section d'information si oui, sinon renvoie vers la page de projet.
                (curLocation.pathname === "/galerie-des-projets") ?

                <ExpanderSection expanderState={expanderState}>
                    <div className="infoProjet" ref={infoRef}>
                        <div className="carouselProjet">
                            <Carrousel images={projet.images}></Carrousel>
                        </div>
                        <div className="rightSection">
                            <p><b>Description du projet:</b><br /><br /><span>{projet.description}</span></p>
                            <div className="coursReliesProjet">
                                <h4>Cours reliés</h4>
                                {
                                    cours != "Personnel" ? cours.map(unCours => {return(<a href="#" className="coursProjetLien">{unCours}</a>)}) : "Personnel"
                                }
                            </div>
                        </div>
                    </div>
                    <div className="fermerSection" onClick={() => setExpanderState(false)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </ExpanderSection>
                :
                <></>
            }
            
        </div>
    );
}
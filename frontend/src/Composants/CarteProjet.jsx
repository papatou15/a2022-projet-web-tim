import './CarteProjet.scss';
import {useState, useEffect, useRef } from 'react';
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';

import { useLocation } from 'react-router-dom';


export default function CarteProjet({id, projet, titre, type, cours, auteurs, image, carteOpenState, setCarteOpenState, setDetailsOpen, detailCoursOpen, setCarteAgrandie}){

    const openDetails = () => {
        setDetailsOpen(true);
    }

    const closeDetails =() => {
        setDetailsOpen(false);
    }

    const curLocation = useLocation();
    
    return(
        <div className="groupeCarteProjet" expanderstate={carteOpenState === id ? "true" : "false"}>
            <ExpanderButton onClick={() => {(curLocation.pathname === "/projets-2" || curLocation.pathname === "/frontend/projets-2") ? openDetails(): closeDetails(); setCarteOpenState(id); setCarteAgrandie({titre, cours, auteurs, image, type, projet})}}>
                <div className="carteProjet">
                    <div className="curve1"></div>
                    <div className="curve2"></div>
                    <div className="containerImgProjet">
                        <div className="bgImage" style={{backgroundImage: "url(" + image[0] + ")"}}></div>
                        <img src={image[0]} alt={"Image de " + titre} className="imgProjet"/>
                    </div>
                    <div className="titreProjet">
                        <h4>{titre}</h4>
                    </div>
                    <div className="descProjet">
                        <p className='type-projet'><b>Type - </b><span>{type}</span></p>
                        <p className='cours'><b>Cours - </b>{cours !== "Personnel" ? cours.map(unCours => {return(<span key={unCours} className="simpleCours">{unCours}</span>)}) : "N/A"}</p>
                    </div>
                    <p className='auteur'><b>Auteur - </b>{auteurs.map(unAuteur => {return(<span key={unAuteur}>{unAuteur}</span>)})}</p>
                </div>
            </ExpanderButton>
        </div>
    );
}
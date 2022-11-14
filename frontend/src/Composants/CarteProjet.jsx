import './CarteProjet.scss';
import { useContext, useState, useEffect } from 'react';
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';


export default function CarteProjet({id, projet, titre, type, cours, auteurs, image, carteOpenState, setCarteOpenState}){
    const [expanderState, setExpanderState] = useState(false);

    useEffect(() => {
        if (expanderState && carteOpenState !== id)
        {
            setExpanderState(false);
        }
    }, [carteOpenState])
    return(
        <div className="groupeCarteProjet" expanderstate={expanderState ? "true" : "false"}>
            <ExpanderButton onClick={() => {setExpanderState(!expanderState); setCarteOpenState(id);}}>
                <div className="carteProjet">
                    <div className="titreProjet">
                        <h4>{titre}</h4>
                    </div>
                    <img src={image[0]} alt="Image du projet" className="imgProjet"/>
                    <div className="descProjet">
                        <p><b>Catégorie: </b><span>{type}</span></p>
                        {console.log("Cours : " + cours)}
                        <p><b>Cours: </b>{cours != "Personnel" ? cours.map(unCours => {return(<span className="simpleCours">{unCours}</span>)}) : "Personnel"}</p>
                        <p><b>Fait par: </b>{auteurs.map(unAuteur => {return(<span>{unAuteur}</span>)})}</p>
                    </div>
                </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div className="infoProjet">
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
            </ExpanderSection>
        </div>
    );
}
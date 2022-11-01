import './CarteProjet.scss';
import { useContext, useState } from 'react';
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';


export default function CarteProjet({projet, titre, type, cours, auteurs, image}){
    const [expanderState, setExpanderState] = useState(false);

    return(
        <div className="groupeCarteProjet" expanderstate={expanderState ? "true" : "false"}>
            <ExpanderButton onClick={() => {setExpanderState(!expanderState);}}>
                <div className="carteProjet">
                    <div className="titreProjet">
                        <h4>{titre}</h4>
                    </div>
                    <img src={image} alt="" className="imgProjet"/>
                    <div className="descProjet">
                        <p><b>Catégorie: </b><span>{type}</span></p>
                        <p><b>Cours: </b>{cours.map(unCours => {return(<span className="simpleCours">{unCours}</span>)})}</p>
                        <p><b>Fait par: </b>{auteurs.map(unAuteur => {return(<span>{unAuteur}</span>)})}</p>
                    </div>
                </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div className="infoProjet">
                    <div className="carouselProjet">
                        {/* <Carrousel images={image}></Carrousel> */}
                    </div>
                    <div className="rightSection">
                        <p><b>Description du projet:</b><br /><br /><span>{projet.description}</span></p>
                        <div className="coursReliesProjet">
                            <h4>Cours reliés</h4>
                            {
                                cours.map(unCours => {return(<a href="#" className="coursProjetLien">{unCours}</a>)})
                            }
                        </div>
                    </div>
                </div>
            </ExpanderSection>
        </div>
    );
}
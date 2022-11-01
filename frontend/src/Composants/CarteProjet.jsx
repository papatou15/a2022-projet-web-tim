import './CarteProjet.scss';
import { useContext, useState } from 'react';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';

export default function CarteProjet({projet, titre, type, cours, auteurs, image}){
    const [expanderState, setExpanderState] = useState(false);

    return(
        <div className="groupeCarteProjet">
            <ExpanderButton expanderState={expanderState} setExpanderState={setExpanderState}>
                <div className="carteProjet">
                    <div className="titreProjet">
                        <h4>{titre}</h4>
                    </div>
                    <img src={image} alt="" className="imgProjet"/>
                    <div className="descProjet">
                        <p><b>Catégorie: </b>{type}</p>
                        <p><b>Cours: </b>{cours}</p>
                        <p><b>Fait par: </b>{auteurs}</p>
                    </div>
                </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div className="infoProjet">
                    <div className="carouselProjet">

                    </div>
                    <div className="rightSection">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe incidunt eos totam et, vel tenetur, ipsam harum necessitatibus cumque mollitia ipsa dolore veniam! Illo neque architecto consequatur! Atque, recusandae voluptatibus.</p>
                        <div className="coursReliesProjet">
                            <h4>Cours reliés</h4>
                            <div className="coursProjetLien"></div>
                            <div className="coursProjetLien"></div>
                            <div className="coursProjetLien"></div>
                        </div>
                    </div>
                </div>
            </ExpanderSection>
        </div>
    );
}
import './CarteProjet.scss';
import { useContext, useState } from 'react';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';

export default function CarteProjet({projet, titre, type, cours, auteurs, image}){
    const [expanderState, setExpanderState] = useState(false);

    return(
        <div>
            <ExpanderButton expanderState={expanderState} setExpanderState={setExpanderState}>
            <div className="carteProjet">
                <div className="titreProjet">
                    <h4>{titre}</h4>
                </div>
                <img src={image} alt="" className="imgProjet"/>
                <div className="descProjet">
                    <p>Catégorie: {type}</p>
                    <p>Cours: {cours}</p>
                    <p>Fait par: {auteurs}</p>
                </div>
            </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div>
                    Allo
                </div>
            </ExpanderSection>
        </div>
    );
}
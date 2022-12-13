import { useRef } from 'react';
import useScrollToByHash from '../../../Hooks/useScrollToByHash';
import './MaisonneuveSection.scss';

export default function MaisonneuveSection({backgroundColor, texte1, texte2, lien1, lien2, lienPlaceholder1, lienPlaceholder2, img=""}){

    const styleCustom = {
        backgroundColor: backgroundColor
    }

    const maisonneuveRef = useRef(null);

    useScrollToByHash(maisonneuveRef, "#maisonneuve");

    return (
        <div ref={maisonneuveRef} style={styleCustom} className="MaisonneuveSection">
            <div className="sectionSocial" id='maisonneuve'>
                <div className="contenuMaisonneuve">
                    <img src="https://cdn.discordapp.com/attachments/1012793479648251914/1044344188952641557/persofinal-balloon.png" alt="alternatetext"></img>
                    <div className="sideContent">
                        <div className="content1">
                            <p>{texte1} <b><a href={lien1} target="_blank" rel="noopener noreferrer">{lienPlaceholder1}</a></b></p>
                        </div>
                        <div className="content2">
                            <p>{texte2} <b><a href={lien2} target="_blank" rel="noopener noreferrer">{lienPlaceholder2}</a></b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
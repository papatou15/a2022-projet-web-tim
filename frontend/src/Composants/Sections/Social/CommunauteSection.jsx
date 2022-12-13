import './CommunauteSection.scss';
import FlechesCarousel from '../../FlechesCarousel';
import { scrollButtons } from '../../../utils/scrollButtons';
import { useEffect, useRef } from 'react';
import useOnResize from '../../../Hooks/useOnResize';
import { useLocation } from 'react-router-dom';
import useScrollToByHash from '../../../Hooks/useScrollToByHash';

export default function CommunauteSection({backgroundColor, carte1Titre, carte2Titre, carte3Titre, carte1Texte, carte2Texte, carte3Texte}){

    const carteCommunaute = useRef(null);
    const widthCarte = useOnResize(carteCommunaute);

    const styleCustom = {
        backgroundColor: backgroundColor
    }

    const communauteRef = useRef(null);

    useScrollToByHash(communauteRef, "#communaute");

    return (
        <div ref={communauteRef} style={styleCustom} className="CommunauteSection">
            <div className="contenuCommunaute" id="wrapperCartesCommunaute" >
                <div className="carteCommunaute" ref={carteCommunaute}>
                    <div className="carteBG">
                        <p>{carte1Texte}</p>
                    </div>
                    <div className="carteTitre" >
                        <p>{carte1Titre}</p>
                    </div>
                </div>
                <div className="carteCommunaute">
                    <div className="carteBG">
                        <p>{carte2Texte}</p>
                    </div>
                    <div className="carteTitre">
                        <p>{carte2Titre}</p>
                    </div>
                </div>
                <div className="carteCommunaute">
                    <div className="carteBG">
                        <p>{carte3Texte}</p>
                    </div>
                    <div className="carteTitre">
                        <p>{carte3Titre}</p>
                    </div>
                </div>
            </div>
            <FlechesCarousel 
                onClickLeft={() => scrollButtons("wrapperCartesCommunaute", -widthCarte)}         
                onClickRight={() => scrollButtons("wrapperCartesCommunaute", widthCarte)}
            />
        </div>
    );
}
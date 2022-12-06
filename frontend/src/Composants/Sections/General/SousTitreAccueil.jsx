import { useEffect, useState } from 'react';
import './SousTitreAccueil.scss';

export default function SousTitreAccueil({backgroundColor, couleurTexte, premierMot, secondMot, estSurLaGauche=false}){

    const [isLeftAligned, setIsLeftAligned] = useState(false);

    useEffect(() => {
        if (estSurLaGauche === "1") {
            setIsLeftAligned(true);
        } else if (estSurLaGauche === true) {
            setIsLeftAligned(true);
        }
    }, []);

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: couleurTexte,
        padding: isLeftAligned ? ' 0 0 0 clamp(10%, 15vw, 5%)' :  ' 0 clamp(10%, 15vw, 5%) 0 0',
        justifyContent: isLeftAligned ? 'flex-start' : 'flex-end',
    }

    return (
        <div style={styleCustom} className="SousTitreAccueil">
                <h2>{premierMot} <b>{secondMot}</b></h2>
        </div>
    );
}
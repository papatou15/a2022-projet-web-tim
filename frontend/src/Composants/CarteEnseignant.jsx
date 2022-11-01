import { useEffect, useRef, useState } from 'react';
import './CarteEnseignant.scss';

export default function CarteEnseignant({id, prenom, nom, image, description, carteAgrandie, setCarteAgrandie, onClick, listeSize}){

    const myRef = useRef();

    const [posX, setPosX] = useState();
    const [posY, setPosY] = useState();

    const [carteWidth, setCarteWidth] = useState();
    const [carteHeight, setCarteHeight] = useState();

    const [posXCentre, setPosXCentre] = useState();
    const [posYCentre, setPosYCentre] = useState();

    const getPosition = () => {
        const x = myRef.current.offsetLeft; 
        console.log(myRef);
        setPosX(x);
        const y = myRef.current.offsetTop;
        setPosY(y);
    }

    const getSize  = () => {
        const width = myRef.current.clientWidth; 
        setCarteWidth(width);
        const height = myRef.current.clientHeight;
        setCarteHeight(height);
    }

    useEffect(() => {
        getPosition();  
        getSize();
    }, []);

    const setPosCentrer = () => {
        setPosXCentre(listeSize.width / 2)
    }

    useEffect(() => {
        setPosCentrer();
    }, [posX, posY, carteHeight, carteWidth])
    

    return (
        <a ref={myRef} onClick={onClick} className="CarteEnseignant">
            <div style={{'--pos-x': posXCentre, '--pos-y' : posYCentre}} className={(carteAgrandie === id) ? "contenu active" : "contenu"}>
                <button onClick={() => setCarteAgrandie(-1)}>Fermer</button>
                <p className='enseignant-nom'>{prenom + " " + nom}</p>
            </div>
        </a>
    );
}
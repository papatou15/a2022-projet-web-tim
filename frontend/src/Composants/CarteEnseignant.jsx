import { useRef } from 'react';
import './CarteEnseignant.scss';

export default function CarteEnseignant({id, refCarte, prenom, nom, image, description, temps, cours, etudes, onClick, randomHeight}){

    const nomComplet = prenom + " " + nom;
    //const ref = useRef(0);
    return (
        <a onClick={onClick} ref={refCarte} className="CarteEnseignant" style={{top: randomHeight + "%"}}>
            <div className='curve'></div>
            <div className="enseignant-image">
                <div className="img-container">
                    <img src={image} alt={nomComplet + " image" }/> 
                </div>
            </div>
            <p className='enseignant-nom'>{nomComplet}</p>
        </a>
    );
}
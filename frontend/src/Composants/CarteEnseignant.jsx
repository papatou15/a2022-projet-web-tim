import { forwardRef, useRef } from 'react';
import './CarteEnseignant.scss';

export const CarteEnseignant = forwardRef(({id, prenom, nom, image, description, temps, cours, etudes, onClick, randomHeight}, ref) => {

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
})
import './CarteEnseignant.scss';

export default function CarteEnseignant({id, prenom, nom, image, description, temps, cours, etudes, onClick, randomHeight}){

    const nomComplet = prenom + " " + nom;

    return (
        <a onClick={onClick} className="CarteEnseignant" style={{top: randomHeight + "%"}}>
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
import './CarteEnseignant.scss';

export default function CarteEnseignant({id, prenom, nom, image, description, onClick, randomHeight}){

    return (
        <a onClick={onClick} className="CarteEnseignant" style={{top: randomHeight + "%"}}>
            <p className='enseignant-nom'>{prenom + " " + nom}</p>
        </a>
    );
}
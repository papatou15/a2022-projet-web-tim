import './CarteEnseignant.scss';

export default function CarteEnseignant({id, prenom, nom, image, description, onClick}){

    return (
        <a onClick={onClick} className="CarteEnseignant">
            <p className='enseignant-nom'>{prenom + " " + nom}</p>
        </a>
    );
}
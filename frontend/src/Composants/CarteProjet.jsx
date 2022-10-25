import './CarteProjet.scss';

export default function CarteProjet({projet, titre, type, cours, auteurs, image}){


    return(
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
    );
}
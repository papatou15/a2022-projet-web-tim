import './CarteProjet.scss';

export default function CarteProjet({projet, titre, type, cours, auteurs, image}){


    return(
        <div className="carteProjet">
            <div className="titreProjet">
                <h4>{titre}</h4>
            </div>
            <img src={image} alt="" className="imgProjet"/>
            <div className="descProjet">
                <p>{type}</p>
                <p>{cours}</p>
                <p>{auteurs}</p>
            </div>
            
        </div>
    );
}
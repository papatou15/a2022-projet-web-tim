import './CarteProjet.scss';

export default function CarteProjet({projet, titre, type, cours, auteurs, image}){


    return(
        <div className="carteProjet">
            <h4 className="titreProjet">{titre}</h4>
            <img src={image} alt="" className="imgProjet"/>
            <p>{type}</p>
            <p>{cours}</p>
            <p>{auteurs}</p>
        </div>
    );
}
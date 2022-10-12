import './CarteProjet.scss';

export default function CarteProjet({titre, }){


    return(
        <div className="carteProjet">
            <h4 className="titreProjet">{titre}</h4>
            <img src="" alt="" className="imgProjet" />
            <p>Type</p>
            <p>Cours</p>
            <p>Auteurs</p>
        </div>
    );
}
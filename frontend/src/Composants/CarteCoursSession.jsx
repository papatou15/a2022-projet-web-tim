import './CarteCoursSession.scss';

export default function CarteCoursSession({cours, titre}){

    return(
        <div className="carteSessions">
            <h3>{titre}</h3>
            <div className="listeCours">
                {
                    cours.map(
                        unCours => <a key={unCours.ID} href="#" className="cours"><p>{unCours.titre} </p></a>
                    )
                }
            </div>
        </div>
    );
}
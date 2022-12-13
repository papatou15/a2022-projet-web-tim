import { NavLink } from 'react-router-dom';
import './CarteCoursSession.scss';

export default function CarteCoursSession({cours, titre}){

    return(
        <div className="carteSessions" id="carteSessions">
            <h3>{titre}</h3>
            <div className="curve"></div>
            <div className="listeCours">
                {
                    cours.map(
                        unCours => <NavLink key={unCours.titre} className={"cours"} to={'/cours'}><p>{unCours.titre} </p></NavLink>
                    )
                }
            </div>
        </div>
    );
}
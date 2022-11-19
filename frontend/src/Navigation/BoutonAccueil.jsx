import './BoutonAccueil.scss';
import { checkURLHorL } from '../utils/checkURL';
import { NavLink } from 'react-router-dom';

export default function BoutonAccueil({logo}){
    return (
        <div className="BoutonAccueil">
            <NavLink to={checkURLHorL()}>
                <img src={logo} alt="Logo du TIM" />
            </NavLink>
        </div>
    );
}
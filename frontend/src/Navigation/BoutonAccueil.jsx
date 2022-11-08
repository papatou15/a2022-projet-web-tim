import './BoutonAccueil.scss';

import { NavLink } from 'react-router-dom';

export default function BoutonAccueil({logo}){
    return (
        <div className="BoutonAccueil">
            <NavLink to={'/'}>
                <img src={logo} alt="Logo du TIM" />
            </NavLink>
        </div>
    );
}
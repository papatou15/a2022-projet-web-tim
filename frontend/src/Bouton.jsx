import { NavLink } from 'react-router-dom';
import './Bouton.scss';

export default function Bouton({children, href}){
    return (
        <div className="Bouton">
            <NavLink to={href}>{<p>{children}</p>}</NavLink>
        </div>
    );
}
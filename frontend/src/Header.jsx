import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="Header">
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/cours">Cours</NavLink>
            </nav>
        </header>
    );
}
import './PageLinks.scss';
import { NavLink } from 'react-router-dom';
import { checkURLHorL } from '../utils/checkURL';

export default function PageLinks({toggleMenu, menu}){

    return (
        <ul className="PageLinks">
            {
                (menu != null)
                ?
                menu.data.header.headerMenuItems.map(
                    page => 
                        (page.pageSlug === "accueil") ?
                        <p key={page.ID}><NavLink  onClick={toggleMenu ? toggleMenu : null} to={checkURLHorL()}>{page.title.toUpperCase()}</NavLink></p>
                        :
                        <p key={page.ID}><NavLink  onClick={toggleMenu ? toggleMenu : null} to={checkURLHorL() + page.pageSlug}>{page.title.toUpperCase()}</NavLink></p>
                )   
                :
                <div></div>
            } 
        </ul>
    );
}
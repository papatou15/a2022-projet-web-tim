import './PageLinks.scss';
import { NavLink } from 'react-router-dom';

export default function PageLinks({toggleMenu, menu}){

    return (
        <ul className="PageLinks">
            {
                (menu != null)
                ?
                menu.data.header.headerMenuItems.map(
                    page => 
                        (page.pageSlug === "accueil") ?
                        <p key={page.ID}><NavLink  onClick={toggleMenu} to={'/'}>{page.title.toUpperCase()}</NavLink></p>
                        :
                        <p key={page.ID}><NavLink  onClick={toggleMenu} to={'/' + page.pageSlug}>{page.title.toUpperCase()}</NavLink></p>
                )   
                :
                <div></div>
            } 
        </ul>
    );
}
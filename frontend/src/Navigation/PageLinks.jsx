import './PageLinks.scss';
import { NavLink } from 'react-router-dom';

export default function PageLinks({toggleMenu, pages}){

    return (
        <ul className="PageLinks">
            {
                (pages != null)
                ?
                pages.data.header.headerMenuItems.map(
                    page => 
                        <p key={page.ID}><NavLink  onClick={toggleMenu} to={'/' + page.pageSlug}>{page.title.toUpperCase()}</NavLink></p>
                )
                :
                <div></div>
            }
        </ul>
    );
}
import './PageLinks.scss';
import { NavLink } from 'react-router-dom';

export default function PageLinks({toggleMenu, navOpenState, pages}){

    return (
        <ul className="PageLinks">
            {
                (pages != null)
                ?
                pages.map(
                    page => 
                    (page.slug === 'accueil') 
                    ?
                    <p><NavLink onClick={toggleMenu} key={page.id} to={'/'}>{page.title.rendered.toUpperCase()}</NavLink></p>
                    :
                    <p><NavLink onClick={toggleMenu} key={page.id} to={'/' + page.slug}>{page.title.rendered.toUpperCase()}</NavLink></p>
                )
                :
                <div></div>
            }
        </ul>
    );
}
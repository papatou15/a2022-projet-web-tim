import './PageLinks.scss';
import { NavLink } from 'react-router-dom';

export default function PageLinks({toggleMenu, navOpenState, pages}){

    console.log(pages);

    return (
        <ul className="PageLinks">
            {
                (pages != null)
                ?
                pages.map(
                    page => 
                    <NavLink onClick={toggleMenu} key={page.id} to={'/' + page.slug}>{page.title.rendered.toUpperCase()}</NavLink>
                )
                :
                <div></div>
            }
        </ul>
    );
}
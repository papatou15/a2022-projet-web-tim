import './PageLinks.scss';
import { NavLink } from 'react-router-dom';

export default function PageLinks(props){
    return (
        <ul className="PageLinks">
            {
                (props.pages != null)
                ?
                props.pages.map(
                    page => 
                    (page.slug == 'accueil')
                    ?
                    <NavLink onClick={props.toggleMenu} key={page.id}to={'/'}>{page.title.rendered.toUpperCase()}</NavLink>
                    :
                    <NavLink onClick={props.toggleMenu} key={page.id} to={'/' + page.slug}>{page.title.rendered.toUpperCase()}</NavLink>
                )
                :
                <div></div>
            }
        </ul>
    );
}
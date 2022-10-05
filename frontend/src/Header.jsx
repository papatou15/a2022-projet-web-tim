import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="Header">
            <nav>
                {
                    (props.pages != null)
                    ?
                    props.pages.map(
                        page => 
                        (page.slug == 'accueil')
                        ?
                        <NavLink key={page.id}to={'/'}>{page.title.rendered}</NavLink>
                        :
                        <NavLink key={page.id} to={'/' + page.slug}>{page.title.rendered}</NavLink>
                    )
                    :
                    <div></div>
                }
            </nav>
        </header>
    );
}
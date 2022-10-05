import './Navigation.scss';

//Components
import PageLinks from './PageLinks';
import Contacts from './Contacts';

export default function Navigation(props){

    return (
        <nav className={props.navOpenState ? "Navigation open" : "Navigation closed"}>
            <PageLinks toggleMenu={props.toggleMenu} navOpenState={props.navOpenState} pages={props.pages}/>
            <div className="curve">
                <Contacts/>
            </div>
        </nav>
    );
}
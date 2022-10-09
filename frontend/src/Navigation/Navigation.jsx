import './Navigation.scss';

//Components
import PageLinks from './PageLinks';
import Contacts from './Contacts';
import Ronds from '../Decorations/Ronds';

export default function Navigation(props){
    return (
        <div className={props.navOpenState ? "Navigation open" : "Navigation closed"}>
            <nav>

                <PageLinks toggleMenu={props.toggleMenu} navOpenState={props.navOpenState} pages={props.pages}/>
                <div className="curve">
                    <Contacts/>
                </div>
                <Ronds/>
            </nav>
        </div>
        
    );
}
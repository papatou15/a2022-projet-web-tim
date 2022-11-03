import './Navigation.scss';

//Components
import PageLinks from './PageLinks';
import Contacts from './Contacts';
import Ronds from '../Decorations/Ronds';
import { useRef } from 'react';
import useCliqueExterieurAlert from '../Hooks/useCliqueExterieurAlerte';

export default function Navigation(props){

    const navigationRef = useRef(null);

    useCliqueExterieurAlert(navigationRef, props.onOutsideClick);

    return (
        <div className={props.navOpenState ? "Navigation open" : "Navigation closed"}>
            <nav ref={navigationRef}>

                <PageLinks toggleMenu={props.toggleMenu} navOpenState={props.navOpenState} pages={props.pages}/>
                <div className="curve">
                    <Contacts/>
                </div>
                <Ronds/>
            </nav>
        </div>
        
    );
}
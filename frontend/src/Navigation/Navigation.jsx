import './Navigation.scss';

//Components
import PageLinks from './PageLinks';
import Contacts from './Contacts';
import Ronds from '../Decorations/Ronds';
import { useRef } from 'react';
import useCliqueExterieurAlert from '../Hooks/useCliqueExterieurAlerte';

export default function Navigation({burgerRef, toggleMenu, navOpenState, pages, onOutsideClick}){

    const navigationRef = useRef(null);

    useCliqueExterieurAlert(navigationRef, onOutsideClick, burgerRef);

    return (
        <div className={navOpenState ? "Navigation open" : "Navigation closed"}>
            <nav ref={navigationRef}>

                <PageLinks toggleMenu={toggleMenu} navOpenState={navOpenState} pages={pages}/>
                <div className="curve">
                    <Contacts/>
                </div>
                <Ronds/>
            </nav>
        </div>
        
    );
}
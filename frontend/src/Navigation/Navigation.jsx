import './Navigation.scss';

//Components
import PageLinks from './PageLinks';
import Contacts from './Contacts';
import Ronds from '../Decorations/Ronds';
import { useRef } from 'react';
import useCliqueExterieur from '../Hooks/useCliqueExterieur';

export default function Navigation({burgerRef, toggleMenu, navOpenState, menu, onOutsideClick}){

    const navigationRef = useRef(null);

    useCliqueExterieur(navigationRef, onOutsideClick, burgerRef);

    return (
        <div className={navOpenState ? "Navigation open" : "Navigation closed"}>
            <nav ref={navigationRef}>

                <PageLinks toggleMenu={toggleMenu} navOpenState={navOpenState} menu={menu}/>
                <div className="curve">
                    <Contacts/>
                </div>
                <Ronds/>
            </nav>
        </div>
        
    );
}
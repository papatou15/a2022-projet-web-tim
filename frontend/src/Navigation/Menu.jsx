import './Menu.scss';
import { useState, useRef, useEffect } from 'react';
import {Burger} from './Burger';
import Navigation from './Navigation';
import BoutonAccueil from './BoutonAccueil';

export default function Menu({siteData}){

    const [navOpenState, setNavOpenState] = useState(false);

    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setNavOpenState(!navOpenState);
    };

    return (
        <div className="Menu">
            <BoutonAccueil logo={siteData.logo}/>
            <Burger ref={burgerRef} onClick={toggleMenu} navOpenState={navOpenState}/>
            <Navigation navOpenState={navOpenState} 
                        toggleMenu={toggleMenu} 
                        menu={siteData.menu}
                        onOutsideClick={() => setNavOpenState(false)}
                        burgerRef={burgerRef}
            />
        </div>
    );
}
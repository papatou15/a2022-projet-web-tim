import './Menu.scss';
import { useState, useRef } from 'react';
import {Burger} from './Burger';
import Navigation from './Navigation';

export default function Menu({siteData}){

    const [navOpenState, setNavOpenState] = useState(false);

    const burgerRef = useRef(null);

    const toggleMenu = () => {
        setNavOpenState(!navOpenState);
    };

    return (
        <div className="Menu">
            <Burger ref={burgerRef} onClick={toggleMenu} logoSrc={siteData.logo}/>
            <Navigation navOpenState={navOpenState} 
                        toggleMenu={toggleMenu} 
                        pages={siteData.pages}
                        onOutsideClick={() => setNavOpenState(false)}
                        burgerRef={burgerRef}
            />
        </div>
    );
}
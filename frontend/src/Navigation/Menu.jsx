import './Menu.scss';
import { useState } from 'react';
import Burger from './Burger';
import Navigation from './Navigation';

export default function Menu({siteData}){

    const [navOpenState, setNavOpenState] = useState(false);

    const toggleMenu = () => {
        setNavOpenState(!navOpenState);
    };

    return (
        <div className="Menu">
            <Burger onClick={toggleMenu} logoSrc={siteData.logo}/>
            <Navigation navOpenState={navOpenState} toggleMenu={toggleMenu} pages={siteData.pages}/>
        </div>
    );
}
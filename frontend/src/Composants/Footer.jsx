import './Footer.scss';
import { DataContext } from '../Context/DataContext';
import PageLinks from '../Navigation/PageLinks';
import Contacts from '../Navigation/Contacts';
import { useRef } from 'react';
import {useIsOnScreen} from '../Hooks/useIsOnScreen.jsx';

export default function Footer({menu}){
    
    return(
        <footer id="footer">
            <div className="footerContent">
                <div className="footerLeft">
                    <h4>Navigation</h4>
                    <PageLinks menu={menu} />
                </div>
                <div className="separationLine"></div>
                <div className="footerRight">
                    <div className="socialMedia">
                        <h4>Suivez-nous!</h4>
                        <Contacts></Contacts>
                    </div>
                </div>
            </div>
        </footer>
    )
}
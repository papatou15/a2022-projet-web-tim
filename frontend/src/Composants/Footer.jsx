import './Footer.scss';
import { DataContext } from '../Context/DataContext';
import PageLinks from '../Navigation/PageLinks';
import Contacts from '../Navigation/Contacts';
import { useLocation } from 'react-router-dom';

export default function Footer({menu, footerView}){

    const curLocation = useLocation();
    const footerDisplay = (footerView == false && curLocation != "") ? "block" : "none";
    return(
        <footer id="footer" style={{display: footerDisplay}}>
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
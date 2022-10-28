import { useContext, useState } from 'react';
import {DataContext} from '../Context/DataContext'
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import { cutString, getCoursFromID } from '../utils/timapi-utils';
import './UnCours.scss';

export default function UnCours({id}){

    const siteData = useContext(DataContext);

    const {titre, description, images, numero_du_cours} = getCoursFromID(siteData.cours, id);

    const [expanderState, setExpanderState] = useState(false);

    return (
        <div className="UnCours">
            <ExpanderButton expanderState={expanderState} setExpanderState={setExpanderState}>
                <div className="carte" expanderstate={expanderState ? "true" : "false"}>
                    <div className='header'>
                        <h2>{titre}</h2>
                        <h3>{numero_du_cours}</h3>
                    </div>
                    <div className='image-container'>
                    {
                        (images) ? 
                        <img src={images[0].guid}/>
                        :
                        <div/>
                    }  
                    </div>
                    <div>
                        <p>{cutString(description, 200)}</p>
                    </div>
                </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div className="cours-details" expanderstate={expanderState ? "true" : "false"}>
                    <Carrousel images={images}/>
                    {description}
                </div>
            </ExpanderSection>
        </div>
    );
}
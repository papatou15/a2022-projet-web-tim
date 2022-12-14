import { useContext, useEffect, useState } from 'react';
import {DataContext} from '../Context/DataContext'
import Carrousel from '../Navigation/Carrousel';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import { cutString, getCoursFromID } from '../utils/timapi-utils';
import './UnCours.scss';

export default function UnCours({id, carteOpenState, setCarteOpenState, carteAgrandie, setCarteAgrandie, setDetailsOpen, detailCoursOpen, refCarte}){

    const siteData = useContext(DataContext);

    const {titre, description, images, numero_du_cours} = getCoursFromID(siteData.cours, id);

    const [expanderState, setExpanderState] = useState(false);

    const toggleDetails = () => {
        setDetailsOpen(!expanderState);
        setExpanderState(!expanderState);
    }

    const closeDetails = () => {
        setDetailsOpen(false);
        setExpanderState(false);
    }

    useEffect(() => {
        if (expanderState && carteOpenState !== numero_du_cours)
        {
            setExpanderState(false);
        }
    }, [carteOpenState, expanderState, numero_du_cours])

    return (
        <div className="UnCours" expanderstate={expanderState ? "true" : "false"} ref={refCarte}>
            <ExpanderButton onClick={() => {toggleDetails(); setCarteOpenState(numero_du_cours); setCarteAgrandie({titre, description, images, numero_du_cours})}}>
                <div className="carte" expanderstate={expanderState ? "true" : "false"}>
                    <div className="curve1"></div>
                    <div className='header'>
                        <h2>{titre}</h2>
                        <h3>{numero_du_cours}</h3>
                    </div>
                    <div className='image-container'>
                    {
                        (images) ? 
                        <img src={images[0].guid} alt={titre}/>
                        :
                        <div/>
                    }  
                    </div>
                </div>
            </ExpanderButton>
        </div>
    );
}
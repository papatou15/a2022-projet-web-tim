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
    }, [carteOpenState])

    return (
        <div className="UnCours" expanderstate={expanderState ? "true" : "false"} ref={refCarte}>
            <ExpanderButton onClick={() => {toggleDetails(); setCarteOpenState(numero_du_cours); setCarteAgrandie({titre, description, images, numero_du_cours})}}>
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
                    <div className='description'>
                        <p>{cutString(description, 200)}</p>
                    </div>
                </div>
            </ExpanderButton>
            <ExpanderSection expanderState={expanderState}>
                <div className="cours-details" expanderstate={expanderState ? "true" : "false"}>
                    <div className="cours-carrousel">
                    {
                        (images) ?
                        <Carrousel images={images}/>
                        :
                        <></>
                    }
                    </div>
                    <div className="cours-description">
                        <h3>{titre}</h3>
                        <h3>Description</h3>
                        <p>{description}</p>
                    </div>
                    <div className="cours-projets-relies">

                    </div>
                </div>
                <div className="fermerSection" onClick={() => {closeDetails()}}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </ExpanderSection>
        </div>
    );
}
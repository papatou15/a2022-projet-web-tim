import { useState, useRef } from 'react';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import FlechesCarousel from '../Composants/FlechesCarousel';
import {scrollButtons} from '../utils/scrollButtons';
import useOnResize from '../Hooks/useOnResize';
import './ListeCours.scss';
import UnCours from './UnCours';

export default function ListeCours({id, sessionTitre, lesCours, carteOpenState, setCarteOpenState, filtreCours, carteAgrandie, setCarteAgrandie, setDetailsOpen, detailCoursOpen}){
    const [expanderState, setExpanderState] = useState(true);

    const carteCours = useRef(null);
    const widthCarte = useOnResize(carteCours);

    const idDynamique = ("wrapperCours" + id);
    return (
            <section className="ListeCours">
                <div className="sessionTitre">
                    <h2>{sessionTitre}</h2>
                    <ExpanderButton onClick={() => {setExpanderState(!expanderState);}}>
                        {
                            (expanderState) ?
                            <p>Collapse</p>
                            :
                            <p>Expand</p>
                        }
                    </ExpanderButton>
                </div>
                <ExpanderSection expanderState={expanderState}>
                    <div className="lesCours" id={idDynamique}>
                    {
                        lesCours.filter(filtreCours).map(
                            unCours =>
                                <UnCours key={unCours.ID} 
                                id={unCours.ID} 
                                carteOpenState={carteOpenState} 
                                setCarteOpenState={setCarteOpenState} 
                                carteAgrandie={carteAgrandie} 
                                setCarteAgrandie={setCarteAgrandie} 
                                detailCoursOpen={detailCoursOpen}
                                setDetailsOpen={setDetailsOpen}
                                refCarte={carteCours}/>
                                
                        )
                    }
                    </div> 
                    <FlechesCarousel 
                        onClickLeft={() => scrollButtons(idDynamique, -widthCarte)}
                        onClickRight={() => scrollButtons(idDynamique, widthCarte)}
                    />
                </ExpanderSection>
                
            </section>
    );
}
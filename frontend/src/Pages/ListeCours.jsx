import { useState } from 'react';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import './ListeCours.scss';
import UnCours from './UnCours';

export default function ListeCours({sessionTitre, lesCours, carteOpenState, setCarteOpenState}){

    // useEffect(() => {
    //     if (randomOrder === true) {
    //         console.log("MELANGER");
    //         cours = melangerTableau(cours);
    //     }

    // }, []);

    const [expanderState, setExpanderState] = useState(true);

    return (
            <section className="ListeCours">
                <div className="sessionTitre">
                    <h1>{sessionTitre}</h1>
                    <ExpanderButton onClick={() => {setExpanderState(!expanderState);}}>Expand</ExpanderButton>
                </div>
                <ExpanderSection expanderState={expanderState}>
                    <div className="lesCours">
                    {
                        lesCours.map(
                            unCours =>
                                <UnCours key={unCours.ID} id={unCours.ID} carteOpenState={carteOpenState} setCarteOpenState={setCarteOpenState}/>
                        )
                    }
                    </div> 
                </ExpanderSection>
            </section>
    );
}
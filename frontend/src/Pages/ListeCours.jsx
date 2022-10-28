import { useState } from 'react';
import ExpanderButton from '../Navigation/ExpanderButton';
import ExpanderSection from '../Navigation/ExpanderSection';
import './ListeCours.scss';
import UnCours from './UnCours';

export default function ListeCours({key, sessionTitre, lesCours}){

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
                    <ExpanderButton expanderState={expanderState} setExpanderState={setExpanderState}>Expand</ExpanderButton>
                </div>
                <ExpanderSection expanderState={expanderState}>
                    <div className="lesCours">
                    {
                        lesCours.map(
                            unCours =>
                                <UnCours key={unCours.ID} id={unCours.ID}/>
                        )
                    }
                    </div> 
                </ExpanderSection>
            </section>
    );
}
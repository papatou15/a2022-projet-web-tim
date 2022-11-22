import { useEffect, useState } from 'react';
import { sortSessions } from '../utils/timapi-utils';
import ListeCours from './ListeCours';
import './ListeSessions.scss';

export default function ListeSessions({sessions, filtre, carteAgrandie, setCarteAgrandie, detailCoursOpen, setDetailsOpen}){

    const [sortedSessions, setSortedSessions] = useState([]);
    const [carteOpenState, setCarteOpenState] = useState('');

    const [isFilterPossible, setIsFilterPossible] = useState(true);

    useEffect(() => {
        if (sortedSessions.length === 0) {
            setIsFilterPossible(true);
            return;
        }
        if (sortedSessions.filter(filtrerSessions).length === 0) {
            setIsFilterPossible(false);
        }
        else {
            console.log('test2');
            setIsFilterPossible(true);
        }
    }, [filtre]);

    useEffect(() => setSortedSessions(sortSessions(sessions)), []);

    const filtrerCours = (cours) => {
        if (filtre.length === 0) return true;
        const types = cours.type_de_cours;
        const contientFiltre =  types.map(type => {
            if (filtre.some(row => row.includes(type.ID))) {
                return true;
            }
        }).includes(true);
        return contientFiltre;
    }

    const filtrerSessions = (session) => {
        if (filtre.length === 0) return true;
        const coursFiltre = session.cours.filter(filtrerCours);
        if (coursFiltre.length > 0) return true;
    }

    return (
        <section className="ListeSessions">
            {
                isFilterPossible ? 
                sortedSessions.filter(filtrerSessions).map(
                    session => 
                        <ListeCours key={session.id}
                                    id={session.id}
                                    sessionTitre={session.title.rendered} 
                                    filtreCours={filtrerCours} 
                                    lesCours={session.cours} 
                                    carteOpenState={carteOpenState} 
                                    setCarteOpenState={setCarteOpenState} 
                                    carteAgrandie={carteAgrandie} 
                                    setCarteAgrandie={setCarteAgrandie} 
                                    detailCoursOpen={detailCoursOpen}
                                    setDetailsOpen={setDetailsOpen}
                        />
                )
                :
                <div className='filtre-impossible'><p>Aucun cours ne correspond à ce filtre :|</p></div>
            }
        </section>
    );
}
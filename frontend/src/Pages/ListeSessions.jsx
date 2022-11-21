import { useEffect, useState } from 'react';
import { sortSessions } from '../utils/timapi-utils';
import ListeCours from './ListeCours';
import './ListeSessions.scss';

export default function ListeSessions({sessions, filtre, carteAgrandie, setCarteAgrandie, detailCoursOpen, setDetailsOpen}){

    const [sortedSessions, setSortedSessions] = useState([]);
    const [carteOpenState, setCarteOpenState] = useState('');

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
                sortedSessions.filter(filtrerSessions).map(
                    session => 
                        <ListeCours key={session.id} 
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
            }
        </section>
    );
}
import { useEffect, useState } from 'react';
import { sortSessions } from '../utils/timapi-utils';
import ListeCours from './ListeCours';
import './ListeSessions.scss';

export default function ListeSessions({sessions}){

    const [sortedSessions, setSortedSessions] = useState([]);
    const [carteOpenState, setCarteOpenState] = useState('');

    useEffect(() => setSortedSessions(sortSessions(sessions)), []);

    return (
        <section className="ListeSessions">
            {
                sortedSessions.map(
                    session => 
                        <ListeCours key={session.id} sessionTitre={session.title.rendered} lesCours={session.cours} carteOpenState={carteOpenState} setCarteOpenState={setCarteOpenState}/>
                )
            }
        </section>
    );
}
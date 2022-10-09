import ListeCours from './ListeCours';
import './ListeSessions.scss';

export default function ListeSessions({sessions}){

    return (
        <section className="ListeSessions">
            {
                sessions.map(
                    session => 
                        <ListeCours key={session.titre} session={session.title.rendered} cours={session.cours} randomOrder={true}/>
                )
            }
        </section>
    );
}
import useFetch from '../Hooks/useFetch';
import ListeCours from './ListeCours';
import './ListeSessions.scss';

export default function ListeSessions(props){

    const sessions = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/session');

    return (
        <section className="ListeSessions">
            {
                (sessions != null) ?
                    sessions.map(
                        session => 
                            <ListeCours session={session.title.rendered} cours={session.cours}/>
                    )
                :
                <p>Loading</p>
            }
        </section>
    );
}
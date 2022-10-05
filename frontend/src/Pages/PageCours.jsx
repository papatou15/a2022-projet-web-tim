import './PageCours.scss';
import ListeSessions from './ListeSessions';

export default function PageCours(props){
    return (
        <main className="PageCours">
            <h1>Cours</h1>
            <ListeSessions/>
        </main>
    );
}
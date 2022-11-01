import ListeEnseignants from '../Composants/ListeEnseignants';
import './PageEnseignants.scss';

export default function PageEnseignants(props){
    return (
        <main className="PageEnseignants">
            <ListeEnseignants/>
        </main>
    );
}
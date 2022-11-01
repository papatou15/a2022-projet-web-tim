import './PageCours.scss';
import ListeSessions from './ListeSessions';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

export default function PageCours(props){

    const siteData = useContext(DataContext);

    return (
        <main className="PageCours">
            <h1>Les cours</h1>
            {
                (siteData.sessions != null) 
                ?
                <ListeSessions sessions={siteData.sessions}/>
                :
                <p>Loading</p>
            }
        </main>
    );
}
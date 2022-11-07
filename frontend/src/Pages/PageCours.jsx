import './PageCours.scss';
import ListeSessions from './ListeSessions';
import { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import Filtre from '../Composants/Filtre';

export default function PageCours(props){

    const {sessions, type_cours} = useContext(DataContext);
    const [itemFiltre, setItemFiltre] = useState([]);

    return (
        <main className="PageCours">
            <h1>Les cours</h1>
            <Filtre itemFiltre={itemFiltre} setItemFiltre={setItemFiltre} options={type_cours} placeholder={"Filtrer les cours"}/>
            {
                (sessions != null) 
                ?
                <ListeSessions sessions={sessions} filtre={itemFiltre}/>
                :
                <p>Loading</p>
            }
        </main>
    );
}
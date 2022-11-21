import './PageCours.scss';
import ListeSessions from './ListeSessions';
import { useContext, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import Filtre from '../Composants/Filtre';
import Couleurs from '../Variables/Couleurs.scss'
import Formes from '../Variables/Formes.scss'
import TransitionVague from '../Decorations/TransitionVague';

export default function PageCours(props){

    const {sessions, type_cours} = useContext(DataContext);
    const [itemFiltre, setItemFiltre] = useState([]);

    return (
        <main className="PageCours">
            <TransitionVague couleurBackground={Couleurs.baseColor} 
                             couleurCourbe={Couleurs.couleurPrimaire}  
                             minHeight={'250px'} 
                             clipPath={Formes.vagueCours} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={-2}
                             isTransparent={true}/>
            <h1>Les cours</h1>
            <Filtre filtre={itemFiltre} setFiltre={setItemFiltre} options={type_cours} placeholder={"Filtrer les cours"}/>
            {
                (sessions != null) 
                ?
                <ListeSessions sessions={sessions} filtre={itemFiltre}/>
                :
                <p>Loading</p>
            }

            <TransitionVague couleurBackground={Couleurs.couleurQuaternaire} 
                             couleurCourbe={Couleurs.baseColor}  
                             minHeight={'100px'} 
                             clipPath={Formes.vagueSimpleMobile} 
                             isSimple={true}
                             rotationX={0}
                             transitionY={2}
                             isTransparent={true}
                             position={'relative'}
                             top={'48px'}/>     
        </main>
    );
}
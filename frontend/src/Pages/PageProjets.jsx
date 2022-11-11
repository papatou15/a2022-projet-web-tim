import './PageProjets.scss';
import CarteProjet from '../Composants/CarteProjet';
import Filtre from '../Composants/Filtre';
import { DataContext } from '../Context/DataContext';
import { useContext, useState } from 'react';

export default function PageProjets(props){
    const {projets, type_cours} = useContext(DataContext);
    const [carteOpenState, setCarteOpenState] = useState('');
    const [filtre, setFiltre] = useState([]);

    const filtrerProjets = (projet) => {
        if (filtre.length === 0) return true;
        const types = projet.type_du_projet;
        const contientFiltre =  types.map(type => {
            if (filtre.some(row => row.includes(type.ID))) {
                return true;
            }
        }).includes(true);
        return contientFiltre;
    }

    const filtrersdfjkl = (session) => {
        if (filtre.length === 0) return true;
        // const coursFiltre = session.cours.filter(filtrerCours);
        // if (coursFiltre.length > 0) return true;
    }

    return (
        <main className="PageProjets">
            <h1>Les projets</h1>
            <Filtre filtre={filtre} setFiltre={setFiltre} options={type_cours} placeholder={"Filtrer les projets"}/>
            <div className="listeProjets">
                {
                    projets.filter(filtrerProjets).map(
                        projet => <CarteProjet key={projet.id} projet={projet} id={projet.id} titre={projet.titre} type={projet.type_du_projet[0].post_title} cours={projet.cours_lies ? projet.cours_lies.map( cours_lies => cours_lies.titre ) : "Personnel"} auteurs={projet.auteurs} image={projet.images.map( images => images.guid)} carteOpenState={carteOpenState} setCarteOpenState={setCarteOpenState}/>
                    )
                }
            </div>
        </main>
    );
}
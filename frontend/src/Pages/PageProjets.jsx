import './PageProjets.scss';
import CarteProjet from '../Composants/CarteProjet';
import { DataContext } from '../Context/DataContext';
import { useContext } from 'react';

export default function PageProjets(props){
    const dataProjets = useContext(DataContext);

    return (
        <main className="PageProjets">
            <h1>Les projets</h1>
            {/* <div className="filtreProjets">
                Filtres
            </div> */}
            <div className="listeProjets">
                {
                    dataProjets.projets.map(
                        projet => <CarteProjet projet={projet} titre={projet.titre} type={projet.type_du_projet[0].post_title} cours={projet.cours_lies.map( cours_lies => cours_lies.titre )} auteurs={projet.auteurs} image={projet.images[0].guid}/>
                    )
                }
            </div>
        </main>
    );
}
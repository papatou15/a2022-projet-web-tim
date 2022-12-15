import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import {CarteEnseignant} from './CarteEnseignant';
import './ListeEnseignants.scss';

export default function ListeEnseignants({carteAgrandie, setCarteAgrandie, setDetailsOpen}){

    const {enseignants} = useContext(DataContext);
    return (
        <div className="ListeEnseignants">
            {
                enseignants.map((enseignant) => 
                    <CarteEnseignant 
                        key={enseignant.id}
                        id={enseignant.id} 
                        prenom={enseignant.prenom}
                        nom={enseignant.nom} 
                        image={enseignant.image.guid}
                        description={enseignant.description}
                        temps={enseignant.temps_enseignant}
                        cours={enseignant.cours_donne}
                        etudes={enseignant.etude}
                        carteAgrandie={carteAgrandie}
                        setCarteAgrandie={setCarteAgrandie}
                        onClick={() => {setCarteAgrandie(enseignant); setDetailsOpen(true)}}
                    />   
                )
            }
        </div>
    );
}
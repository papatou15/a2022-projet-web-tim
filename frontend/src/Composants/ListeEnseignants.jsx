import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import CarteEnseignant from './CarteEnseignant';
import './ListeEnseignants.scss';

export default function ListeEnseignants({carteAgrandie, setCarteAgrandie, setDialogOpen}){

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
                        image={enseignant.image}
                        description={enseignant.description}
                        carteAgrandie={carteAgrandie}
                        setCarteAgrandie={setCarteAgrandie}
                        onClick={() => {{setCarteAgrandie(enseignant); setDialogOpen(true)}}}
                    />   
                )
            }
        </div>
    );
}
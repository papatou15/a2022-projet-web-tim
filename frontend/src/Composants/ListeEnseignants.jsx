import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import CarteEnseignant from './CarteEnseignant';
import './ListeEnseignants.scss';

export default function ListeEnseignants(props){

    const {enseignants} = useContext(DataContext);

    const ListeRef = useRef();

    const [carteAgrandie, setCarteAgrandie] = useState(null);

    const [listeSize, setListeSize] = useState({width: 0, height: 0});

    const agrandirCarte = (carteID) => {
        if (carteAgrandie === carteID) return;
        setCarteAgrandie(carteID); 
    }

    const getSize = () => {
        const width = ListeRef.current.clientWidth; 
        const height = ListeRef.current.clientHeight;
        setListeSize({width: width, height: height});
    }

    useEffect(() => {
        getSize();
    }, [])

    useEffect(() => {

    },  [listeSize]);

    return (
        <div ref={ListeRef} className="ListeEnseignants">
            {
                enseignants.map((enseignant) => 
                    <CarteEnseignant 
                        key={enseignant.id}
                        id={enseignant.id} 
                        prenom={enseignant.prenom}
                        nom={enseignant.nom} 
                        image={enseignant.image}
                        description={enseignant.description}
                        onClick={() => agrandirCarte(enseignant.id)}
                        carteAgrandie={carteAgrandie}
                        setCarteAgrandie={setCarteAgrandie}
                        listeSize={listeSize}
                    />   
                )
            }
        </div>
    );
}
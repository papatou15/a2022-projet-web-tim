import { useContext, useRef } from 'react';
import { DataContext } from '../../../Context/DataContext';
import CarteEnseignant from '../../CarteEnseignant';
import FlechesCarousel from '../../FlechesCarousel';
import Bouton from '../../../Bouton';
import { scrollButtons } from '../../../utils/scrollButtons';
import { randomArraySlice } from '../../../utils/array-utils';
import './EnseignantsAccueil.scss';
import useOnResize from '../../../Hooks/useOnResize';


export default function EnseignantsAccueil({boutonTexte}){

    const {enseignants} = useContext(DataContext);

    const carteProfs = useRef(0);
    const widthCarte = useOnResize(carteProfs);
    console.log("Width carte enseignant accueil: " + widthCarte);

    const sliceNumberProfs = randomArraySlice(enseignants, 5); //Nombre renvoyé pour le nombre de carte dans la section des enseignants

    return (
        <section className="EnseignantsAccueil">
            <div className="contenuProfs">
                <div className="sectionCartesRandom" id="scrollCartes">
                    {
                        enseignants.map(
                            unEnseignant => <CarteEnseignant key={unEnseignant.id} refCarte={carteProfs} nom={unEnseignant.nom} prenom={unEnseignant.prenom} image={unEnseignant.image.guid} description={unEnseignant.description} randomHeight={Math.floor(Math.random() * 5) * 10}/>
                        )/*.slice(sliceNumberProfs, sliceNumberProfs + 5)*/
                    }
                </div>
                <FlechesCarousel
                    
                    onClickLeft={() => scrollButtons("scrollCartes", -widthCarte)}
                    onClickRight={() => scrollButtons("scrollCartes", widthCarte)}
                />
                <Bouton href={"les-enseignants"}>{boutonTexte}</Bouton>
            </div>
        </section>
    );
}
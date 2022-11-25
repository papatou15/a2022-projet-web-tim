import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import CarteEnseignant from '../../CarteEnseignant';
import FlechesCarousel from '../../FlechesCarousel';
import Bouton from '../../../Bouton';
import { scrollButtons } from '../../../utils/scrollButtons';
import { randomArraySlice } from '../../../utils/array-utils';
import './EnseignantsAccueil.scss';


export default function EnseignantsAccueil({boutonTexte}){

    const {enseignants} = useContext(DataContext);

    const sliceNumberProfs = randomArraySlice(enseignants, 5); //Nombre renvoyé pour le nombre de carte dans la section des enseignants

    return (
        <section className="EnseignantsAccueil">
            <div className="contenuProfs">
                <div className="sectionCartesRandom" id="scrollCartes">
                    {
                        enseignants.map(
                            unEnseignant => <CarteEnseignant key={unEnseignant.id} nom={unEnseignant.nom} prenom={unEnseignant.prenom} image={unEnseignant.image.guid} description={unEnseignant.description} randomHeight={Math.floor(Math.random() * 5) * 10}/>
                        )/*.slice(sliceNumberProfs, sliceNumberProfs + 5)*/
                    }
                </div>
                <FlechesCarousel
                    onClickLeft={() => scrollButtons("scrollCartes", -430)}
                    onClickRight={() => scrollButtons("scrollCartes", 430)}
                />
                <Bouton href={"les-enseignants"}>{boutonTexte}</Bouton>
            </div>
        </section>
    );
}
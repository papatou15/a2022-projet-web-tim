import './ProjetsAccueil.scss';
import { melangerTableau, randomArraySlice } from '../../../utils/array-utils';
import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import CarteProjet from '../../CarteProjet';
import FlechesCarousel from '../../FlechesCarousel';
import Bouton from '../../../Bouton';
import { scrollButtons } from '../../../utils/scrollButtons';


export default function ProjetsAccueil({boutonTexte}){

    const {projets} = useContext(DataContext);

    let sliceNumberProjets = randomArraySlice(projets, 3); //Nombre renvoyé pour le nombre de carte dans la section des projets

    return (
        <section className="ProjetsAccueil">
            <div className="carouselCartesProjets" id='cartesProjets'>
                {
                    melangerTableau(projets).map(
                        projet => {return <CarteProjet key={projet.id} projet={projet} titre={projet.titre} type={projet.type_du_projet[0].type_cours} cours={projet.cours_lies ? projet.cours_lies.map( cours_lies => cours_lies.titre ) : "Personnel"} auteurs={projet.auteurs} image={projet.images.map( images => images.guid)}/>}
                    ).slice(sliceNumberProjets, sliceNumberProjets + 4)
                }
            </div>
            <FlechesCarousel
                    onClickLeft={() => scrollButtons("cartesProjets", -400)}
                    onClickRight={() => scrollButtons("cartesProjets", 400)}
            />
            <Bouton href={"projets"}>{boutonTexte}</Bouton>
            <div className="mascotteProjetsAccueil">
                <img src="http://timm184.sg-host.com/backend/wp-content/uploads/2022/12/persofinal-corde.png" alt="" />
            </div>
        </section>
    );
}
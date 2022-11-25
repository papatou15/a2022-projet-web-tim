import './AvenirAccueil.scss';
import FlechesCarousel from '../../FlechesCarousel';
import Bouton from '../../../Bouton';
import { scrollButtons } from '../../../utils/scrollButtons';

export default function AvenirAccueil({carte1Titre, carte2Titre, carte3Titre, carte1Texte, carte2Texte, carte3Texte, boutonTexte}){
    return (
        <section className="AvenirAccueil">
                <div className="contenuAvenir">
                    <div className="blockCartes" id='carouselCartesAvenir'>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>{carte1Texte}</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>{carte1Titre}</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>{carte2Texte}</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>{carte2Titre}</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>{carte3Texte}</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>{carte3Titre}</b></p>
                            </div>
                        </div>
                    </div>
                    <FlechesCarousel
                        onClickLeft={() => scrollButtons("carouselCartesAvenir", -400)}
                        onClickRight={() => scrollButtons("carouselCartesAvenir", 400)}
                    />
                    <Bouton href={"avenir"}>{boutonTexte}</Bouton>
                </div>
                
            </section>
    );
}
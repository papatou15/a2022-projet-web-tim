import Bouton from '../Bouton';
import CarteCoursSession from '../Composants/CarteCoursSession';
import CarteProjet from '../Composants/CarteProjet';
import CarteEnseignant from '../Composants/CarteEnseignant';
import FlechesCarousel from '../Composants/FlechesCarousel';
import './PageAccueil.scss';
import { DataContext } from '../Context/DataContext';
import { useContext, useRef } from 'react';
import { melangerTableau, randomArraySlice } from '../utils/array-utils';
import { scrollButtons } from '../utils/scrollButtons';
import { sortSessions } from '../utils/timapi-utils';
import { TrimDOMElements } from '../utils/strings-utils';
import Footer from '../Composants/Footer';

export default function PageAccueil(props){
    const dataAccueil = useContext(DataContext);
    window.addEventListener('scroll', function() {
        let hauteurVp = window.innerHeight;
        let scrollVertical = window.document.documentElement.scrollTop;

        console.log("hauteur: " + hauteurVp);
        console.log("scroll: " + scrollVertical);
        if(scrollVertical && scrollVertical > hauteurVp) {
            console.log('Afficher footer ');
        }
        else {
            console.log('Cacher footer ');

        }
    })

    let sliceNumberProjets = randomArraySlice(dataAccueil.projets, 3); //Nombre renvoyé pour le nombre de carte dans la section des projets
    let sliceNumberProfs = randomArraySlice(dataAccueil.enseignants, 5); //Nombre renvoyé pour le nombre de carte dans la section des enseignants
    console.log(dataAccueil.projets);

    
    return (
        
        <main className="PageAccueil">
            
            <section className="block1 block">

                <video autoPlay muted loop id="accueilBGVideo" min-width="110%" height="auto">
                    <source src="http://timm184.sg-host.com/wp-content/uploads/2022/11/video.mp4" type="video/mp4"/>
                </video>
                <div className="mainTitle">
                    <h1>TIM Maisonneuve</h1>
                    <h3>L’univers du web et du jeu vidéo au bout des doigts!</h3>
                </div>
                <div className="clipPath"></div>
            </section>

            <section className="block2 block">
                <div className="titleSections">
                    <h2>Tes <b>COURS</b></h2>
                </div>
                <div className="carouselSessions">
                    <div className="cartes" id='wrapperCartesSessions'>
                        {
                            sortSessions(dataAccueil.sessions).map(
                                session => <CarteCoursSession key={session.id} cours={session.cours} titre={session.title.rendered}/>
                            )
                        }
                    </div>
                    <FlechesCarousel
                        onClickLeft={() => scrollButtons("wrapperCartesSessions", -300)}
                        onClickRight={() => scrollButtons("wrapperCartesSessions", 300)}
                    />
                    <Bouton href={"galerie-des-cours"}>En savoir plus</Bouton>
                </div>
            </section>

            <section className="block3 block">
                <div className="titleSections">
                    <h2>Ton <b>AVENIR</b></h2>
                </div>
                <div className="contenuAvenir">
                    <div className="blockCartes" id='carouselCartesAvenir'>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Voici quelques exemples de choix de carrière possible avec un diplôme en Intégration Multimédia</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>En <br />Entreprise</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Voici quelques programmes Universitaire accessibles à la fin de ton parcour en Intégration Multimédia</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>À l'université</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Voici quelques possiblitées de stage à la fin de ton parcour en Intégration Multimédia</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>En stage</b></p>
                            </div>
                        </div>
                    </div>
                    <FlechesCarousel
                        onClickLeft={() => scrollButtons("carouselCartesAvenir", -400)}
                        onClickRight={() => scrollButtons("carouselCartesAvenir", 400)}
                    />
                    <Bouton href={"avenir"}>En savoir plus</Bouton>
                </div>
                
            </section>
            <div className="transition">
                <div className="curve"></div>
            </div>
            <section className="block4 block">
                <div className="titleSections">
                    <h2>Un <b>aperçu</b> des <b>PROJETS</b></h2>
                </div>
                <div className="carouselCartesProjets" id='cartesProjets'>
                    {
                        melangerTableau(dataAccueil.projets).map(
                            projet => {console.log(projet);return <CarteProjet key={projet.id} projet={projet} titre={projet.titre} type={projet.type_du_projet[0].type_cours} cours={projet.cours_lies ? projet.cours_lies.map( cours_lies => cours_lies.titre ) : "Personnel"} auteurs={projet.auteurs} image={projet.images.map( images => images.guid)}/>}
                        ).slice(sliceNumberProjets, sliceNumberProjets + 4)
                    }
                </div>
                <FlechesCarousel
                        onClickLeft={() => scrollButtons("cartesProjets", -400)}
                        onClickRight={() => scrollButtons("cartesProjets", 400)}
                />
                <Bouton href={"galerie-des-projets"}>En voir plus!</Bouton>
            </section>

            <section className="block5 block">
                <div className="titleSections">
                    <h2>Le <b>SOCIAL</b></h2>
                </div>
                <div className="contenuSocial">
                    <div className="blockSocial">
                        <div className="socialSlides Event">
                            <div className="socialSlidesContent">
                                <h3>Les <b>Événements</b></h3>
                                <Bouton href={"le-social#evenements"}>Voir les événements</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Communaute">
                            <div className="socialSlidesContent">
                                <h3><b>Communauté</b></h3>
                                <Bouton href={"le-social#communaute"}>En apprendre plus</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Maisonneuve">
                            <div className="socialSlidesContent">
                                <h3><b>Maisonneuve</b></h3>
                                <Bouton href={"le-social#maisonneuve"}>Consulter le collège</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="transition">
                <div className="curve"></div>
            </div>
            <section className="block6 block">
                <div className="titleSections">
                    <h2>Tes <b>Enseignants</b></h2>
                </div>
                <div className="contenuProfs">
                    <div className="sectionCartesRandom" id="scrollCartes">
                        {
                            dataAccueil.enseignants.map(
                                unEnseignant => <CarteEnseignant key={unEnseignant.id} nom={unEnseignant.nom} prenom={unEnseignant.prenom} image={unEnseignant.image.guid} description={unEnseignant.description} randomHeight={Math.floor(Math.random() * 5) * 10}/>
                            )/*.slice(sliceNumberProfs, sliceNumberProfs + 5)*/
                        }
                    </div>
                    <FlechesCarousel
                        onClickLeft={() => scrollButtons("scrollCartes", -430)}
                        onClickRight={() => scrollButtons("scrollCartes", 430)}
                    />
                    <Bouton href={"les-enseignants"}>Voir tous les profs</Bouton>
                </div>
            </section>
            <div className="transition">
                <div className="curve"></div>
                <div className="background"></div>
            </div>
        </main>
    );
}
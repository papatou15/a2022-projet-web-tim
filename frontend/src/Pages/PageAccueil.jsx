import Bouton from '../Bouton';
import CarteCoursSession from '../Composants/CarteCoursSession';
import CarteProjet from '../Composants/CarteProjet';
import './PageAccueil.scss';
import { DataContext } from '../Context/DataContext';
import { useContext } from 'react';

export default function PageAccueil(props){

    const dataAccueil = useContext(DataContext);
    console.log(dataAccueil.projets);
    return (
        
        <main className="PageAccueil">
            
            <section className="block1">

                <video autoPlay muted loop id="accueilBGVideo" min-width="120%" height="auto">
                    <source src="http://timm184.sg-host.com/wp-content/uploads/2022/11/video.mp4" type="video/mp4"/>
                </video>
                <div className="mainTitle">
                    <h1>TIM Maisonneuve</h1>
                    <h3>L’univers du web et du jeu vidéo au bout des doigts!</h3>
                </div>
            </section>

            <section className="block2">
                <div className="titleSections">
                    <h2>Tes <b>COURS</b></h2>
                </div>
                <div className="carouselSessions">
                    <div className="cartes">
                        {
                            dataAccueil.sessions.map(
                                session => <CarteCoursSession key={session.id} cours={session.cours} titre={session.title.rendered}/>
                            )
                        }
                        
                    </div>
                    <div className="navCarousel">
                        <div className="flecheCarousel"></div>
                        <div className="flecheCarousel"></div>
                        <div className="flecheCarousel"></div>
                    </div>
                    <Bouton href={"galerie-des-cours"}>En savoir plus</Bouton>
                </div>
            </section>

            <section className="block3">
                <div className="titleSections">
                    <h2>Ton <b>AVENIR</b></h2>
                </div>
                <div className="contenuAvenir">
                    <div className="blockAvenir">
                        <div className="avenirSlides Entreprise">
                            <div className="avenirSlidesContent">
                                <h3>En <b>Entreprise</b></h3>
                                <Bouton>Voir ta future carrière</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="avenirSlides Universite">
                            <div className="avenirSlidesContent">
                                <h3>À l'<b>Université</b></h3>
                                <Bouton>Voir tes futurs apprentissages</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="avenirSlides Stage">
                            <div className="avenirSlidesContent">
                                <h3>En <b>Stage</b></h3>
                                <Bouton>Voir tes opportunités</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block4">
                <div className="titleSections">
                    <h2>Un <b>aperçu</b> des <b>PROJETS</b></h2>
                </div>
                <div className="carouselCartesProjets">
                    {
                        dataAccueil.projets.map(
                            projet => <CarteProjet key={projet.id} projet={projet} titre={projet.titre} type={projet.type_du_projet[0].post_title} cours={projet.cours_lies.map( cours_lies => cours_lies.titre )} auteurs={projet.auteurs} image={projet.images[0].guid}/>
                        )
                    }
                </div>
            </section>

            <section className="block5">
                <div className="titleSections">
                    <h2>Le <b>SOCIAL</b></h2>
                </div>
                <div className="contenuSocial">
                    <div className="blockSocial">
                        <div className="socialSlides Event">
                            <div className="socialSlidesContent">
                                <h3>Les <b>Événements</b></h3>
                                <Bouton>Voir les événements</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Communaute">
                            <div className="socialSlidesContent">
                                <h3><b>Communauté</b></h3>
                                <Bouton>En apprendre plus</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Maisonneuve">
                            <div className="socialSlidesContent">
                                <h3><b>Maisonneuve</b></h3>
                                <Bouton>Consulter le collège</Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="block6">
            
            </section>
        </main>
    );
}
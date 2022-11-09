import Bouton from '../Bouton';
import CarteCoursSession from '../Composants/CarteCoursSession';
import CarteProjet from '../Composants/CarteProjet';
import CarteEnseignant from '../Composants/CarteEnseignant';
import './PageAccueil.scss';
import { DataContext } from '../Context/DataContext';
import { useContext } from 'react';
import { melangerTableau, randomArraySlice } from '../utils/array-utils';

export default function PageAccueil(props){
    const dataAccueil = useContext(DataContext);
    let sliceNumberProjets = randomArraySlice(dataAccueil.projets, 3); //Nombre renvoyé pour le nombre de carte dans la section des projets
    let sliceNumberProfs = randomArraySlice(dataAccueil.enseignants, 5); //Nombre renvoyé pour le nombre de carte dans la section des enseignants

    console.log(dataAccueil.projets);
    return (
        
        <main className="PageAccueil">
            
            <section className="block1">

                <video autoPlay muted loop id="accueilBGVideo" min-width="110%" height="auto">
                    <source src="http://timm184.sg-host.com/wp-content/uploads/2022/11/video.mp4" type="video/mp4"/>
                </video>
                <div className="mainTitle">
                    <h1>TIM Maisonneuve</h1>
                    <h3>L’univers du web et du jeu vidéo au bout des doigts!</h3>
                </div>
                {/* <div className="clipPath"></div> */}
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
                    </div>
                    <Bouton href={"galerie-des-cours"}>En savoir plus</Bouton>
                </div>
            </section>

            <section className="block3">
                <div className="titleSections">
                    <h2>Ton <b>AVENIR</b></h2>
                </div>
                <div className="contenuAvenir">
                    <div className="blockCartes">
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga adipisci expedita eveniet libero, beatae accusantium, eaque quidem excepturi voluptates id suscipit, ullam sit veritatis architecto!</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>En <br />Entreprise</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur velit et necessitatibus, similique temporibus id fuga saepe quas provident repellat porro nihil nemo. Fuga quam ipsum consequatur? Debitis laboriosam, sequi quaerat error vel nemo ullam quia aliquam sed natus totam veritatis iure at quis quibusdam. Neque quos consequuntur pariatur praesentium!</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>À l'université</b></p>
                            </div>
                        </div>
                        <div className="carteAvenir">
                            <div className="carteBGAvenir">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis excepturi molestias in repellat rem, itaque doloremque iure placeat hic nostrum ad? Necessitatibus minus alias voluptate asperiores autem quae quis consequuntur mollitia sequi vero.</p>
                            </div>
                            <div className="carteTitre">
                                <p><b>En stage</b></p>
                            </div>
                        </div>
                    </div>
                    
                    <Bouton href={"avenir"}>En savoir plus</Bouton>
                </div>
                
            </section>

            <section className="block4">
                <div className="titleSections">
                    <h2>Un <b>aperçu</b> des <b>PROJETS</b></h2>
                </div>
                <div className="carouselCartesProjets">
                    {
                        melangerTableau(dataAccueil.projets).map(
                            projet => <CarteProjet key={projet.id} projet={projet} titre={projet.titre} type={projet.type_du_projet[0].post_title} cours={projet.cours_lies.map( cours_lies => cours_lies.titre )} auteurs={projet.auteurs} image={projet.images.map( images => images.guid)}/>
                        ).slice(sliceNumberProjets, sliceNumberProjets + 3)
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
                <div className="titleSections">
                    <h2>Tes <b>Enseignants</b></h2>
                </div>
                <div className="contenuProfs">
                    <div className="sectionCartesRandom">
                        {
                            dataAccueil.enseignants.map(
                                unEnseignant => <CarteEnseignant key={unEnseignant.id} nom={unEnseignant.nom} prenom={unEnseignant.prenom} image={unEnseignant.image.guid} description={unEnseignant.description} randomHeight={Math.floor(Math.random() * 65)}/>
                            ).slice(sliceNumberProfs, sliceNumberProfs + 5)
                        }
                    </div>
                    <Bouton href={"les-enseignants"}>Voir tout les profs</Bouton>
                </div>
                
            </section>
        </main>
    );
}
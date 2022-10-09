import Bouton from '../Bouton';
import './PageAccueil.scss';
import Bouton from '../Bouton';

export default function PageAccueil(props){
    return (
        <main className="PageAccueil">
            <section className="block1">
                <div className="mainTitle">
                    <h1>TIM Maisonneuve</h1>
                    <h3>Accroche</h3>
                </div>
                <div className="mainButtons">
                    <Bouton/>
                    <Bouton/>
                </div>
            </section>
            <section className="block2">
                <div className="titleSections">
                    <h2>Tes <b>COURS</b></h2>
                </div>
                <div className="carouselSessions">
                    <div className="cartes">
                        <div className="carteSessions">
                            <h4>Session 1</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                        <div className="carteSessions">
                            <h4>Session 2</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                        <div className="carteSessions">
                            <h4>Session 3</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                        <div className="carteSessions">
                            <h4>Session 4</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                        <div className="carteSessions">
                            <h4>Session 5</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                        <div className="carteSessions">
                            <h4>Session 6</h4>
                            <div className="listeCours">
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                                <a href="#" className="cours"><p>Cours</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="navCarousel">
                        <div className="flecheCarousel"></div>
                        <div className="flecheCarousel"></div>
                        <div className="flecheCarousel"></div>
                    </div>
                    <Bouton/>
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
                                <Bouton></Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="avenirSlides Universite">
                            <div className="avenirSlidesContent">
                                <h3>À l'<b>Université</b></h3>
                                <Bouton></Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="avenirSlides Stage">
                            <div className="avenirSlidesContent">
                                <h3>En <b>Stage</b></h3>
                                <Bouton></Bouton>
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
                    <div className="carteProjet">
                        <h4 className="titreProjet">Titre Projet</h4>
                        <img src="" alt="" className="imgProjet" />
                        <p>Type</p>
                        <p>Cours</p>
                        <p>Auteurs</p>
                    </div>
                    <div className="carteProjet">
                        <h4 className="titreProjet">Titre Projet</h4>
                        <img src="" alt="" className="imgProjet" />
                        <p>Type</p>
                        <p>Cours</p>
                        <p>Auteurs</p>
                    </div>
                    <div className="carteProjet">
                        <h4 className="titreProjet">Titre Projet</h4>
                        <img src="" alt="" className="imgProjet" />
                        <p>Type</p>
                        <p>Cours</p>
                        <p>Auteurs</p>
                    </div>
                    <div className="carteProjet">
                        <h4 className="titreProjet">Titre Projet</h4>
                        <img src="" alt="" className="imgProjet" />
                        <p>Type</p>
                        <p>Cours</p>
                        <p>Auteurs</p>
                    </div>
                    <div className="carteProjet">
                        <h4 className="titreProjet">Titre Projet</h4>
                        <img src="" alt="" className="imgProjet" />
                        <p>Type</p>
                        <p>Cours</p>
                        <p>Auteurs</p>
                    </div>
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
                                <Bouton></Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Communaute">
                            <div className="socialSlidesContent">
                                <h3><b>Communauté</b></h3>
                                <Bouton></Bouton>
                            </div>
                            <div className="clipPath"></div>
                        </div>
                        <div className="socialSlides Maisonneuve">
                            <div className="socialSlidesContent">
                                <h3><b>Maisonneuve</b></h3>
                                <Bouton></Bouton>
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
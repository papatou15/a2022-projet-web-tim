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
                <div className="mainTitleCours">
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
                <div className="mainTitleAvenir">
                    <h2>Ton <b>AVENIR</b></h2>
                </div>
                <div>
                    
                </div>
            </section>
            <section className="block4">

            </section>
            <section className="block5">

            </section>
            <section className="block6">

            </section>
        </main>
    );
}
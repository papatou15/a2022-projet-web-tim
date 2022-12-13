import './SocialAccueil.scss';

import Bouton from '../../../Bouton';

export default function SocialAccueil({titre1, titre2, titre3, boutonTexte1, boutonTexte2, boutonTexte3}){
    return (
        <section className="SocialAccueil">
            <div className="contenuSocial">
                <div className="blockSocial">
                    <div className="socialSlides Event">
                        <div className="socialSlidesContent">
                            <h3><b>{titre1}</b></h3>
                            <Bouton href={"/vie-etudiante#evenements"}>{boutonTexte1}</Bouton>
                        </div>
                        <div className="clipPath"></div>
                    </div>
                    <div className="socialSlides Communaute">
                        <div className="socialSlidesContent">
                            <h3><b>{titre2}</b></h3>
                            <Bouton href={"/vie-etudiante#communaute"}>{boutonTexte2}</Bouton>
                        </div>
                        <div className="clipPath"></div>
                    </div>
                    <div className="socialSlides Maisonneuve">
                        <div className="socialSlidesContent">
                            <h3><b>{titre3}</b></h3>
                            <Bouton href={"/vie-etudiante#maisonneuve"}>{boutonTexte3}</Bouton>
                        </div>
                        <div className="clipPath"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
import './PageSocial.scss';

export default function PageSocial(props){

    const siteData = useContext(DataContext);

    const location = useLocation();

    const evenementsRef = useRef(null);
    const maisonneuveRef = useRef(null);
    const communauteRef = useRef(null);

    const sectionsReferences = {
        '#evenements' : evenementsRef,
        '#maisonneuve' : maisonneuveRef,
        '#communaute' : communauteRef
    }

    useEffect(() => {
        if (location.hash) {
            const currentSection = sectionsReferences[location.hash];
            currentSection.current.scrollIntoView();
        }
    }, [])

    return (
        <main className="PageSocial">
            <div ref={evenementsRef} className="sectionSocial" id='evenements'>
                <div id="vague1">
                </div>
                <svg id="vague2">
                    <path d="M0,0C8.34,9.67,89.38,340,330,340H0V0Z"/>
                </svg>
                <h2><span>Les</span>ÉVÉNEMENTS</h2>
                <div className="contenuEvents">
                    <p className="descEvents">Dans le cadre de la technique d'intégration en multimédia, nous fesons aussi des sorties en classe dans certain cours. Par exemple, dans le cours de Technologie Émergente, il y a une sortie nommé OASIS Immersion qui permet aux étudiants de voir des spectacles de lumières.<br/><br/>Un autre événement dans lequel le TIM de Maisonneuve participe est le Game Jam. Un évènement hors du collège dans lequelle des groupes étudiants de plusieurs collèges participe à une compétition de création d'un jeu vidéo.</p>                    
                    <div className="sideEvents">
                        <div className="event1">
                            <img src="" alt="" />
                            <p>Sorties</p>
                        </div>
                        <div className="event2">
                        <img src="" alt="" />
                            <p>GameJams</p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={communauteRef} className="sectionSocial" id='communaute'>
                <h2>COMMUNAUTÉ</h2>
                <div className="contenuCommunaute js-flickity" data-flickity-options='{ "wrapAround": true }'>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Au TIM, nous avons aussi un comité étudiants qui se charge de préparer les évènements qui seront seulement pour les étudiants du TIM. Vous pouvez tous vous y joindre, peu importe vorte année.</p>
                        </div>
                        <div className="carteTitre">
                            <p>Comité</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Un groupe disponible pour aider les étudiants du TIM pendant leur parcour collégiens.</p>
                        </div>
                        <div className="carteTitre">
                            <p>Centre d'aide</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Nous avons aussi un serveur Discord entre les étudiants pour s'entraider durant nos sessions ainsi que faire connaissance.</p>
                        </div>
                        <div className="carteTitre">
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={maisonneuveRef} className="sectionSocial" id='maisonneuve'>
                <h2>MAISONNEUVE</h2>
                <div className="contenuMaisonneuve">
                    <div className="svgPlaceholder">svg</div>
                    <div className="sideContent">
                        <div className="content1">
                            <p>Voici la page web du site du collège de Maisonneuve. Cliquez <a href="https://www.cmaisonneuve.qc.ca/">ici</a>.</p>
                        </div>
                        <div className="content2">
                            <p>Voici la page web de la technique d'intégration en multimédia sur la page de Maisonneuve. Cliquez <a href="https://fc.cmaisonneuve.qc.ca/formations/integration-multimedia/#information-generale-1-tab">ici</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
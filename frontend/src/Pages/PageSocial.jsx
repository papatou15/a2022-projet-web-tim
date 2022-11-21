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
                    <p className="descEvents">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur magnam illo quo reprehenderit quaerat aut ipsam ab quos assumenda eligendi unde perspiciatis, odio ea minus sunt molestiae.<br/><br/>Culpa iusto error deleniti deserunt voluptatem autem voluptas. Necessitatibus dolorem ullam minima quaerat, excepturi ad facere quae nesciunt sequi error, quos a dolore.</p>                    
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
                            <p></p>
                        </div>
                        <div className="carteTitre">
                            <p>Comité</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Un groupe disponible pour aider les étudiants du TIM pendant leur parcour collègiens</p>
                        </div>
                        <div className="carteTitre">
                            <p>Centre d'aide</p>
                        </div>
                    </div>
                    <div className="carteCommunaute">
                        <div className="carteBG">
                            <p>Nous avons aussi un serveur Discord entre les étudiants pour s'entraider durant nos sessions ainsi que faire connaissance</p>
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
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nam dolor obcaecati porro. Voluptatem odio exercitationem eum atque maiores <a>nihil.</a></p>
                            <button>Suite</button>
                        </div>
                        <div className="content2">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nam dolor obcaecati porro. Voluptatem odio exercitationem eum atque maiores nihil.</p>
                            <button>Suite</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
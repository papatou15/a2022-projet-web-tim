import { useRef } from 'react';
import useFooter from '../../../Hooks/useFooter';
import useIsOnScreen from '../../../Hooks/useIsOnScreen';
import './HeaderAccueil.scss';


export default function HeaderAccueil({titre, slogan, videoSource, couleurBanniere, couleurCourbe}){

    // Observateur qui active ou désactive le footer dépendament de la visibilité de la vidéo

    const ref = useRef();
    const isVisible = useIsOnScreen(ref);

    useFooter(isVisible);
    
    const showVideo = (isVisible) ? "visible" : "hidden";

    const scrollDown = () => {
        window.scroll(0, document.querySelector("h2").scrollHeight + 600);
    }

    const styleCustom1 = {
        // backgroundColor: couleurBanniere,
    }

    const styleCustom2 = {
        backgroundColor: couleurCourbe
    }

    return (
        <section className="HeaderAccueil" ref={ref} style={{visibility: showVideo}}>
            <video autoPlay muted loop id="accueilBGVideo" height="110%" object-fit="contain">
                <source src={videoSource} type="video/mp4"/>
            </video>
            <div style={styleCustom1} className="mainTitle">
                <h1>{titre}</h1>
                <h3>{slogan}</h3>
            </div>
            <div onClick={scrollDown} className='scroll-invite'></div>
            <div style={styleCustom2} className="clipPath"></div>
        </section>
    );
}
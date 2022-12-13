import './SectionCoursAccueil.scss';
import FlechesCarousel from '../../FlechesCarousel';
import CarteCoursSession from '../../CarteCoursSession';
import Bouton from '../../../Bouton';
import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import { sortSessions } from '../../../utils/timapi-utils';
import { scrollButtons } from '../../../utils/scrollButtons';

export default function SectionCoursAccueil({backgroundColor, boutonTexte}){

    const styleCustom = {
        backgroundColor: backgroundColor,
    }

    const {sessions} = useContext(DataContext);

    return (
        <section style={styleCustom} className="SectionCoursAccueil">
            <div className="carouselSessions">
                <div className="cartes" id='wrapperCartesSessions'>
                    {
                        sortSessions(sessions).map(
                            session => <CarteCoursSession key={session.id} cours={session.cours} titre={session.title.rendered}/>
                        )
                    }
                </div>
                <FlechesCarousel
                    onClickLeft={() => scrollButtons("wrapperCartesSessions", -300)}
                    onClickRight={() => scrollButtons("wrapperCartesSessions", 300)}
                />
                <Bouton href={"cours"}>{boutonTexte}</Bouton>
            </div>
        </section> 
    );
}
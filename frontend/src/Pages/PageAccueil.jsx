import Bouton from '../Bouton';
import './PageAccueil.scss';

export default function PageAccueil(props){
    return (
        <main className="PageAccueil">
            <section className="presentation">
                <Bouton>Contact</Bouton>
            </section>
            <section className="cours-accueil">
                Tes COURS
            </section>
            <section className="avenir-accueil">
                Ton AVENIR
            </section>
            <section className="projets-accueil">
                Un apercu des PROJETS
            </section>
            <section className="social-accueil">
                Le SOCIAL
            </section>
            <section className="enseignants-accueil">
                Tes ENSEIGNANTS
            </section>
        </main>
    );
}
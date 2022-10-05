import './ListeCours.scss';
import UnCours from './UnCours';

export default function ListeCours({session, cours}){
    return (
        <section className="ListeCours">
            <h1>{session}</h1>
            {
                cours.map(
                    unCours =>
                        <UnCours titre={unCours.titre} desc={unCours.description} numeroCours={unCours.numero_du_cours} />
                )
            }
        </section>
    );
}
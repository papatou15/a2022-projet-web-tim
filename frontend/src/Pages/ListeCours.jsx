import './ListeCours.scss';
import UnCours from './UnCours';

export default function ListeCours({key, session, cours, randomOrder, limite}){

    // useEffect(() => {
    //     if (randomOrder === true) {
    //         console.log("MELANGER");
    //         cours = melangerTableau(cours);
    //     }

    // }, []);

    return (
        <section className="ListeCours">
            <h1>{session}</h1>
            {
                cours.map(
                    unCours =>
                        <UnCours key={unCours.numero_du_cours} titre={unCours.titre} desc={unCours.description} numeroCours={unCours.numero_du_cours} />
                )
            }
        </section>
    );
}
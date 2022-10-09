import './UnCours.scss';

export default function UnCours({key, titre, desc, numeroCours}){
    return (
        <div className="unCours">
            <h2>{titre}</h2>
            <h3>{numeroCours}</h3>
            <p>{desc}</p>
        </div>
    );
}
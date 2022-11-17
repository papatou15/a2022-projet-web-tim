import './ReseauSocial.scss';

export default function ReseauSocial({icone, lien}){
    return (
        <div className="ReseauSocial">
            <a href={lien} target="_blank" rel="noopener noreferrer">
                <img src={icone} alt="Icône du réseau social" />
            </a>
        </div>
    );
}
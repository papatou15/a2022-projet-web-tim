import './UneCarriere.scss';

export default function UneCarriere({nom, sorte, lien}){
    return (
        <div className="UneCarriere">
            <p className='nom-emploi'>{nom}</p>
            <a href={lien} target="_blank" rel="noopener noreferrer">Voir plus</a>
        </div>
    );
}
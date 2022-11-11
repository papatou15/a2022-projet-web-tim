import './UneCarriere.scss';

export default function UneCarriere({nom, sorte}){
    return (
        <div className="UneCarriere">
            <p className='nom-emploi'>{nom}</p>
            <p>Voir plus</p>
        </div>
    );
}
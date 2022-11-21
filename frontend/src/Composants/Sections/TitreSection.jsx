import './TitreSection.scss';

export default function TitreSection({children}){
    return (
        <h2 className="TitreSection">
            <div className='titre-conteneur'>
                {children}
            </div>
        </h2>
    );
}
import './TitreSection.scss';

export default function TitreSection({children, backgroundColor="white"}){

    const styleCustom = {
        backgroundColor: backgroundColor
    }

    return (
        <h2 style={styleCustom} className="TitreSection">
            <div className='titre-conteneur'>
                {children}
            </div>
        </h2>
    );
}
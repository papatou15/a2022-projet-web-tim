import './TitreSection.scss';

export default function TitreSection({children, backgroundColor="white", color="black"}){

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: color
    }

    return (
        <h2 style={styleCustom} className="TitreSection">
            <div className='titre-conteneur'>
                {children}
            </div>
        </h2>
    );
}
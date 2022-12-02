import './TitreSection.scss';

export default function TitreSection({children, backgroundColor="white", color="black", paddingTop="0", paddingBottom="0"}){

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: color,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
    }

    return (
        <h2 style={styleCustom} className="TitreSection">
            <div className='titre-conteneur'>
                {children}
            </div>
        </h2>
    );
}
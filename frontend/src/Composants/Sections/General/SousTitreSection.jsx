import './SousTitreSection.scss';

export default function SousTitreSection({children, backgroundColor="white", color="black"}){

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: color
    }

    return (
        <h3 style={styleCustom} className="SousTitreSection">
            {children}
        </h3>
    );
}
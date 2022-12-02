import './SousTitreSection.scss';

export default function SousTitreSection({children, backgroundColor="white", color="black", textAlign, width}){

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: color,
        textAlign: textAlign,
        width: width,
    }

    return (
        <h3 style={styleCustom} className="SousTitreSection">
            {children}
        </h3>
    );
}
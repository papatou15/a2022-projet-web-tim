import './TexteSection.scss';

export default function TexteSection({children, backgroundColor="white", color="black"}){

    const styleCustom = {
        backgroundColor: backgroundColor, 
        color: color
    }

    return (
        <div style={styleCustom} className="TexteSection">
            <p>{children}</p>
        </div>
    );
}
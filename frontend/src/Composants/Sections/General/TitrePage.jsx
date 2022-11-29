import './TitrePage.scss';

export default function TitrePage({children, couleur="white"}){

    const styleCustom = {
        color: couleur
    }

    return (
        
        <div style={styleCustom} className="TitrePage">
            <h1>
                {children}
            </h1>
        </div>
    );
}
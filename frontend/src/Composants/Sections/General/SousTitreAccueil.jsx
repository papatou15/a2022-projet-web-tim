import './SousTitreAccueil.scss';

export default function SousTitreAccueil({backgroundColor, couleurTexte, premierMot, secondMot, estSurLaGauche=false}){

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: couleurTexte,
        padding: estSurLaGauche ? ' 0 0 0 clamp(10%, 15vw, 5%)' :  ' 0 clamp(10%, 15vw, 5%) 0 0',
        justifyContent: estSurLaGauche ? 'flex-start' : 'flex-end',
    }

    return (
        <div style={styleCustom} className="SousTitreAccueil">
                <h2>{premierMot} <b>{secondMot}</b></h2>
        </div>
    );
}
import './SousTitre.scss';

export default function SousTitre({children}){
    return (
        <h3 className="SousTitre">
            {children}
        </h3>
    );
}
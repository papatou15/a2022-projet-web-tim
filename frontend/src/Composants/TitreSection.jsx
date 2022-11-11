import './TitreSection.scss';

export default function TitreSection({children}){
    return (
        <h2 className="TitreSection">
            {children.toUpperCase()}
        </h2>
    );
}
import './Bouton.scss';

export default function Bouton({children, href}){
    return (
        <a href={href} className="Bouton">
            <p>{children}</p>
        </a>
    );
}
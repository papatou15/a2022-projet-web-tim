import './Burger.scss';

export default function Burger({onClick,logoSrc}){

    return (
        <div className="Burger" onClick={onClick}>
            <img src={logoSrc}/>
        </div>
    );
}
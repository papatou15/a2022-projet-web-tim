import './FiltreOption.scss';

export default function FiltreOption({name, onClick}){
    return (
        <li onClick={onClick} className="FiltreOption">
            {name}
        </li>
    );
}
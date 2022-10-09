import './Burger.scss';
import useFetch from '../Hooks/useFetch';

export default function Burger(props){

    const logoSrc = useFetch('http://timm184.sg-host.com/wp-json/tim/v1/settings/logo');

    return (
        <div className="Burger" onClick={props.onClick}>
            <img src={logoSrc}/>
        </div>
    );
}
import './Burger.scss';
import useFetch from '../Hooks/useFetch';

export default function Burger(props){

    const logoSrc = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/tim/v1/settings/logo');

    return (
        <div className="Burger" onClick={props.onClick}>
            <img src={logoSrc}/>
        </div>
    );
}
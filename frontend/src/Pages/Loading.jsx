import Ronds from '../Decorations/Ronds';
import './Loading.scss';

export default function Loading({isLoading}){
    return (
        <main loadingvalue={isLoading.toString()} className="Loading">
            <Ronds/>
                <div className="point"></div>
                <img src="images/LogoTIMRempli.png"/>
            <Ronds/>
        </main>
    );
}
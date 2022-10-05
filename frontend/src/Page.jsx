import './Page.scss';
import Classes from './Classes.jsx';
import Bouton from './Bouton';

export default function Page(props){
    return (
        <div className="Page">
            <Classes/>
            <Bouton/>
        </div>
    );
}
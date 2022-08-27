import useFetch from './Hooks/useFetch';
import {TrimDOMElements} from './utils/strings-utils';
import './Classes.scss';

export default function Classes(props){

    const classes = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/cours');

    console.log(classes);
    return (
        <div className="Classes">
            {
                (classes != null) ?
                    (classes.length >= 1) ?
                    classes.map(
                        theClass => <div key={theClass.id}>{TrimDOMElements(theClass.content.rendered)}</div>
                    )
                    :
                    <div>
                        Aucun posts yet.
                    </div>
                :
                <div>Loading...</div>
            }
        </div>
    );
}
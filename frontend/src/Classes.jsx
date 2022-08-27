import useFetch from './Hooks/useFetch';
import './Classes.scss';
import Class from './Class';

export default function Classes(props) {

    const classes = useFetch('http://localhost/projet-web-5w5/index.php/wp-json/wp/v2/cours');

    console.log(classes);
    return (
        <div className="Classes">
            {
                (classes != null) ?
                    (classes.length >= 1) ?
                        classes.map(
                            theClass => <Class key={theClass.id} title={theClass.acf.titre} description={theClass.acf.description}></Class>
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
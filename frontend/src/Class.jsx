import './Class.scss';

export default function Class(props) {
    console.log(props.titre);
    return (
        <div className="Class">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}
import './Slide.scss';

export default function Slide({img, index, onClick}){

    return (
        <a onClick={onClick} className="Slide">
            <div>
                <img src={img}/>
            </div>
        </a>
    );
}
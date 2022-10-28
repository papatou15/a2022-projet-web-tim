import './Slide.scss';

export default function Slide({img, index}){

    return (
        <div className="Slide">
            <img src={img.guid}/>
        </div>
    );
}
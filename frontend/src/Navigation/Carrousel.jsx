import './Carrousel.scss';
import Slide from './Slide';

export default function Carrousel({images}){


    return (
        <div className="Carrousel">
            {
                (images) ? 
                images.map((img, index) => <Slide key={index} img={img} index={index}/>)
                :
                <></>
            }
        </div>
    );
}
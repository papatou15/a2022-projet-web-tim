import { useState } from 'react';
import './Carrousel.scss';
import Slide from './Slide';

export default function Carrousel({images}){

    const [imageChosen, imageChosenState] = useState(0);

    return (
        <div className="Carrousel">
            <div className='images-totales'>
            {
                (images) ? 
                images.map((img, index) => <Slide key={index} img={img.guid} index={index} onClick={() => imageChosenState(index)}/>)
                :
                <></>
            }
            </div>
            <div className='image-courrante'>
                <Slide img={images[imageChosen].guid} index={imageChosen}/>
            </div>
            
        </div>
    );
}
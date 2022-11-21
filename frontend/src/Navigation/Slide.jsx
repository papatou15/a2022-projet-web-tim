import './Slide.scss';

export default function Slide({img, index, onClick, isLarge=false}){



    const styleImage = {
        backgroundImage: `url(${img})`
    }

    return (
        <a onClick={onClick} className="Slide" islarge={`${isLarge}`}>
            <div style={styleImage}>
            </div>
        </a>
    );
}
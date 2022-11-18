import './FlechesCarousel.scss';

export default function FlechesCarousel({onClickLeft, onClickRight}){
    return (
        <div className="FlechesCarousel">
            <div onClick={onClickLeft} className="flecheCarousel">
                <div className="fleche"></div>
            </div>
            <div onClick={onClickRight} className="flecheCarousel">
                <div className="fleche"></div>
            </div>
        </div>
    );
}
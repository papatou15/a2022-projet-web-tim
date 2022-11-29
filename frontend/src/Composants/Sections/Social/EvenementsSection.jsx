import './EvenementsSection.scss';

export default function EvenementsSection({texte1, texte2, img1="", img2="", alt1, alt2}){
    return (
        <div className="EvenementsSection">
            <div className="sectionSocial" id='evenements'>
                <div className="contenuEvents">
                    <div className="descEvents">
                        <p>{texte1}</p>                    
                        <p>{texte2}</p>                    
                    </div>

                    <div className="sideEvents">
                        <div className="event1">
                            <img src={img1} alt={alt1} />
                            <p>{alt1}</p>
                        </div>
                        <div className="event2">
                        <img src={img2} alt={alt2} />
                            <p>{alt2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
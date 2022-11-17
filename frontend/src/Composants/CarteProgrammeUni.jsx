import './CarteProgrammeUni.scss';

export default function CarteProgrammeUni({icone, image, nom, typeEtude, lien}){
    return (
        <a href={lien} target="_blank"  el="noopener noreferrer" className="CarteProgrammeUni">
            <div className='type-icone-container'>
                <div className='type-etude'>
                    <p>{typeEtude}</p>
                </div>
                <div className='icone'>
                    <img src={icone.guid}/>
                </div>
            </div>
            <div className="image">
                <img src={image.guid}/>
            </div>
            <div className='nom'>
                <p>{nom}</p>
            </div>
            
        </a>
    );
}
import './CarteProgrammeUni.scss';

export default function CarteProgrammeUni({icone, image, nom, typeEtude}){
    return (
        <div className="CarteProgrammeUni">
            <div className='type-etude'>
                <p>{typeEtude}</p>
            </div>
            <div className="image">
                <img src={image.guid}/>
            </div>
            <div className='nom'>
                <p>{nom}</p>
            </div>
            <div className='icone'>
                <img src={icone.guid}/>
            </div>
        </div>
    );
}
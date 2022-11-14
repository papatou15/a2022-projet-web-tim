import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import './Contacts.scss';
import ReseauSocial from './ReseauSocial';

export default function Contacts(props){

    const {reseaux_sociaux} = useContext(DataContext);

    console.log(reseaux_sociaux);

    return (
        <div className="Contacts">
            {
                reseaux_sociaux.map(reseau => 
                    <ReseauSocial icone={reseau.icone.guid} lien={reseau.lien}/>
                )
            }
        </div>
    );
}
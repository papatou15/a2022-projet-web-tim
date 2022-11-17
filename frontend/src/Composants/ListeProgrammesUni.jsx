import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import CarteProgrammeUni from './CarteProgrammeUni';
import './ListeProgrammesUni.scss';

export default function ListeProgrammesUni(props){

    const {programmes_uni} = useContext(DataContext);

    console.log(programmes_uni);

    return (
        <div className="ListeProgrammesUni">
            {
                programmes_uni.map(programme => 
                    <CarteProgrammeUni key={programme.id} icone={programme.icone} image={programme.image} nom={programme.nom} typeEtude={programme.sorte_detude} lien={programme.lien}/>  
                )
            }
        </div>
    );
}
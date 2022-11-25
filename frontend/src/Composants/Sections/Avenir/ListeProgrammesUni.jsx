import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import CarteProgrammeUni from '../../CarteProgrammeUni';
import './ListeProgrammesUni.scss';

export default function ListeProgrammesUni({backgroundColor="white"}){

    const {programmes_uni} = useContext(DataContext);

    const styleCustom = {backgroundColor: backgroundColor}

    return (
        <div style={styleCustom} className="ListeProgrammesUni">
            {
                programmes_uni.map(programme => 
                    <CarteProgrammeUni key={programme.id} icone={programme.icone} image={programme.image} nom={programme.nom} typeEtude={programme.sorte_detude} lien={programme.lien}/>  
                )
            }
        </div>
    );
}
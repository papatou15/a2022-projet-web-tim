import { useContext } from 'react';
import { DataContext } from '../../../Context/DataContext';
import './ListeCarrieres.scss';
import UneCarriere from '../../UneCarriere';

export default function ListeCarrieres({backgroundColor="white", color="black"}){

    const {carrieres} = useContext(DataContext);

    const styleCustom = {
        backgroundColor: backgroundColor,
        color: color
    }
    
    return (
        <div style={styleCustom}  className='ListeCarrieresContainer'>
            <div className="ListeCarrieres">
                {
                    carrieres.map(carriere => 
                        <UneCarriere key={carriere.id} nom={carriere.nom} sorte={carriere.sorte} lien={carriere.lien}/>  
                    )
                }
            </div>
        </div>
        
    );
}
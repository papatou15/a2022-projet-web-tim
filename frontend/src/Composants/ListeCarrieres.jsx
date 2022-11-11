import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import './ListeCarrieres.scss';
import UneCarriere from './UneCarriere';

export default function ListeCarrieres(props){

    const {carrieres} = useContext(DataContext);
    console.log(carrieres);
    return (
        <div className="ListeCarrieres">
            {
                carrieres.map(carriere => 
                    <UneCarriere key={carriere.id} nom={carriere.nom} sorte={carriere.sorte}/>  
                )
            }
        </div>
    );
}
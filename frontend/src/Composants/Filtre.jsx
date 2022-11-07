import { useEffect, useState } from 'react';
import './Filtre.scss';
import FiltreOption from './FiltreOption';

export default function Filtre({options, itemFiltre, setItemFiltre, placeholder='Filtre'}){

    const [filtreItemsOpen, setFiltreItemsOpen] = useState(false);
    const [hasFilteredItems, setHasFilteredItems] = useState(false);

    useEffect(() => {
        if (itemFiltre.length > 0) {
            setHasFilteredItems(true);
        } else {
            setHasFilteredItems(false);
        }
    }, [itemFiltre]);

    const onFilterItemClick = (id, name) => {
        if (!isOptionSelected(id)) {
            addFiltre(id, name);
        } else {
            removeFiltre(id);
        }
    }

    const addFiltre = (id, name) => {
        setItemFiltre([...itemFiltre, [id, name]])
    } 

    const removeFiltre = (id) => {
        setItemFiltre(itemFiltre.filter(item => item[0] != id));
    }

    const isOptionSelected = (id) => {
        if (itemFiltre.length > 0 && itemFiltre.some(row => row.includes(id))) {
            return true;
        }
        return false;
    }

    const toggleItems = () => {
        setFiltreItemsOpen(!filtreItemsOpen);
    }

    return (
        <div className="Filtre">
            <div className={`select ${hasFilteredItems ? 'filtered' : ''}`}>
                <p>{placeholder}</p>
                <div className="filtered-items">
                    {
                        itemFiltre.map(item => 
                            <div key={item[0]} onClick={() => onFilterItemClick(item[0], item[1])} className='filtered-item'>{item[1]}</div>
                        )
                    }
                </div>
                <div onClick={toggleItems} className="arrow"></div>
            </div>
            <ul className={`filter-options ${filtreItemsOpen ? 'open' : ''}`}>
                {
                    options.filter(option => 
                        !itemFiltre.some(row => row.includes(option.id))
                    ).map(option => 
                        <FiltreOption   key={option.id} 
                                        onClick={() => 
                                        onFilterItemClick(option.id, option.type_cours)} 
                                        name={option.type_cours}
                        />
                    )
                }
            </ul>
        </div>
    );
}
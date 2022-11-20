import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import './PageCustom.scss';
import Section from './Section';

export default function PageCustom({id}){

    const {pages} = useContext(DataContext);
    const pageCustom = pages.filter((page) => page.id === id)[0];

    console.log(pageCustom);

    return (
        <main className="PageCustom">
            {
                pageCustom.sections.map(section => <Section key={section.id} section={section}/>)
            }
        </main>
    );
}
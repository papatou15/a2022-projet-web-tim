import { forwardRef } from 'react';
import './Burger.scss';

export const Burger = forwardRef(({onClick,logoSrc}, ref) => (
    <div className="Burger" onClick={onClick}>
        <img ref={ref} src={logoSrc}/>
    </div>
));
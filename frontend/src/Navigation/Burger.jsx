import { forwardRef } from 'react';
import './Burger.scss';

export const Burger = forwardRef(({onClick, navOpenState}, ref) => (
    <div ref={ref} className="Burger" onClick={onClick} isopen={navOpenState? 'true' : 'false'}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
));
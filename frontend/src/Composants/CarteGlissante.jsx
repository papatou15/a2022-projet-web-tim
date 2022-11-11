import { forwardRef } from 'react';
import './CarteGlissante.scss';

export const CarteGlissante = forwardRef(({children, isOpen, onCloseButtonClicked}, ref) => (
    <div ref={ref} className="CarteGlissante" isopen={isOpen ? "true" : "false"}>
        <button onClick={onCloseButtonClicked}>Fermer</button>
        {children}
    </div>
));
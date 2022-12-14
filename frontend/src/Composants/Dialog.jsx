import { useRef } from 'react';
import useCliqueExterieur from '../Hooks/useCliqueExterieur';
import './Dialog.scss';

export default function Dialog({children, isActive, onOutsideClick, exceptionRef}){

    const dialogRef = useRef(null);

    useCliqueExterieur(dialogRef, onOutsideClick, exceptionRef);

    return (
        <div className="Dialog" active={isActive ? "true" : "false"}>
            <div ref={dialogRef} className='Dialog-contenu'>
                {children}
            </div>
        </div>
    );
}
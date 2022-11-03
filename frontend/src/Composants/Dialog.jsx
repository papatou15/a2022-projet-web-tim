import { useRef } from 'react';
import useCliqueExterieurAlert from '../Hooks/useCliqueExterieurAlerte';
import './Dialog.scss';

export default function Dialog({children, isActive, onOutsideClick}){

    const dialogRef = useRef(null);

    useCliqueExterieurAlert(dialogRef, onOutsideClick);

    return (
        <div className="Dialog" active={isActive ? "true" : "false"}>
            <div ref={dialogRef} className='Dialog-contenu'>
                {children}
            </div>
        </div>
    );
}
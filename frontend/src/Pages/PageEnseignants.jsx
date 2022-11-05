import { useRef, useState } from 'react';
import {CarteGlissante} from '../Composants/CarteGlissante';
import Dialog from '../Composants/Dialog';
import ListeEnseignants from '../Composants/ListeEnseignants';
import './PageEnseignants.scss';

export default function PageEnseignants(props){

    const [dialogOpen, setDialogOpen] = useState(false);
    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [carteAgrandie, setCarteAgrandie] = useState(null);


    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDialogOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
    }

    return (
        <main className="PageEnseignants">
            <ListeEnseignants carteAgrandie={carteAgrandie} setCarteAgrandie={setCarteAgrandie} setDetailsOpen={setDetailsOpen}/>
            <Dialog isActive={dialogOpen} onOutsideClick={() => {setDetailsOpen(false)}} exceptionRef={carteGlissanteRef}>
                {
                    carteAgrandie ? 
                    <div>
                        {carteAgrandie.prenom}
                    </div>
                    : 
                    <></>
                }
            </Dialog>    
            <CarteGlissante ref={carteGlissanteRef} isOpen={carteGlissanteOpen} onCloseButtonClicked={() => {setDetailsOpen(false)}}>
                {
                    carteAgrandie ?
                    <div>
                        {carteAgrandie.prenom}
                    </div> 
                    :
                    <></>
                }
            </CarteGlissante>  
        </main>
    );
}
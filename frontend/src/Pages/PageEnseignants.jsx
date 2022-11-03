import { useState } from 'react';
import Dialog from '../Composants/Dialog';
import ListeEnseignants from '../Composants/ListeEnseignants';
import './PageEnseignants.scss';

export default function PageEnseignants(props){

    const [dialogOpen, setDialogOpen] = useState(false);
    const [carteAgrandie, setCarteAgrandie] = useState(null);

    return (
        <main className="PageEnseignants">
            <ListeEnseignants carteAgrandie={carteAgrandie} setCarteAgrandie={setCarteAgrandie} setDialogOpen={setDialogOpen}/>
            <Dialog isActive={dialogOpen ? true : false} onOutsideClick={() => {setDialogOpen(false)}}>
                {
                    carteAgrandie ? 
                    <div>
                        {carteAgrandie.prenom}
                    </div>
                    : 
                    <></>
                }
            </Dialog>      
        </main>
    );
}
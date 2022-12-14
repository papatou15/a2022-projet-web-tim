import './EnseignantsSection.scss';
import { useState, useRef} from 'react';
import ListeEnseignants from '../../ListeEnseignants';
import { CarteGlissante } from '../../CarteGlissante';
import Dialog from '../../Dialog';
import useFooter from '../../../Hooks/useFooter';

export default function EnseignantsSection({backgroundColor}){

    const [dialogOpen, setDialogOpen] = useState(false);
    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [carteAgrandie, setCarteAgrandie] = useState(null);

    useFooter(true);

    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDialogOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
    }

    const styleCustom = {
        backgroundColor: backgroundColor
    }

    return (
        <div style={styleCustom} className="EnseignantsSection">
            <ListeEnseignants carteAgrandie={carteAgrandie} setCarteAgrandie={setCarteAgrandie} setDetailsOpen={setDetailsOpen}/>
            <Dialog isActive={dialogOpen} onOutsideClick={() => {setDetailsOpen(false)}} exceptionRef={carteGlissanteRef}>
                {
                    carteAgrandie ? 
                    <div className='dialog-enseignants'>
                        <div className='curve'></div>
                        <div className="enseignant-image">
                            <div className="img-container">
                                <img src={carteAgrandie.image.guid} alt={carteAgrandie.prenom + " image" }/> 
                            </div>
                        </div>
                        <div className="enseignant-informations">
                        <p className="enseignant-nom">{carteAgrandie.prenom + " " + carteAgrandie.nom}</p>
                        <p className='enseignant-experience'>{carteAgrandie.temps_enseignant}</p>
                        <p className="enseignant-description">{carteAgrandie.description}</p>
                        <p className="enseignant-cours">{carteAgrandie.cours_donne}</p>
                        </div>
                        
                    </div>
                    : 
                    <></>
                }
            </Dialog>    
            <CarteGlissante ref={carteGlissanteRef} isOpen={carteGlissanteOpen} onCloseButtonClicked={() => {setDetailsOpen(false)}}>
                {
                    carteAgrandie ?
                    <div className='carte-glissante-enseignants'>
                        <div className='curve'></div>
                        <div className="enseignant-image">
                            <div className="img-container">
                                <img src={carteAgrandie.image.guid} alt={carteAgrandie.prenom + " image" }/> 
                            </div>
                        </div>
                        <div className="enseignant-informations">
                            <p className="enseignant-nom">{carteAgrandie.prenom + " " + carteAgrandie.nom}</p>
                            <p className='enseignant-experience'>{carteAgrandie.temps_enseignant}</p>
                            <p className="enseignant-description">{carteAgrandie.description}</p>
                            <p className="enseignant-cours">{carteAgrandie.cours_donne}</p>
                        </div>
                        
                    </div>
                    :
                    <></>
                }
            </CarteGlissante> 
        </div>
    );
}
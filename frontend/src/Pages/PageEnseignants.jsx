import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { useRef, useState } from 'react';
import {CarteGlissante} from '../Composants/CarteGlissante';
import TitreSection from '../Composants/Sections/TitreSection';
import Dialog from '../Composants/Dialog';
import ListeEnseignants from '../Composants/ListeEnseignants';
import './PageEnseignants.scss';

export default function PageEnseignants({id}){

    const {pages} = useContext(DataContext);
    const pageEnseignant = pages.filter((page) => page.id === id)[0];


    const [dialogOpen, setDialogOpen] = useState(false);
    const [carteGlissanteOpen, setCarteGlissanteOpen] = useState(false);
    const [carteAgrandie, setCarteAgrandie] = useState(null);


    const carteGlissanteRef= useRef(null);

    const setDetailsOpen = (isOpen) => {
        setDialogOpen(isOpen);
        setCarteGlissanteOpen(isOpen);
        console.log(carteAgrandie);
    }

    return (
        <main className="PageEnseignants">
            <div className="curve"></div>
            <svg className="vague2">
                    <path d="M0,0C8.34,9.67,89.38,340,330,340H0V0Z"/>
            </svg>
            <TitreSection>{pageEnseignant.titre_sections[0]}</TitreSection>
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
        </main>
    );
}
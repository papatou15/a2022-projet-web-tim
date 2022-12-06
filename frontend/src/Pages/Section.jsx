import './Section.scss';

import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Context/DataContext';

//General
import TitreSection from '../Composants/Sections/General/TitreSection';
import TitrePage from '../Composants/Sections/General/TitrePage';
import TexteSection from '../Composants/Sections/General/TexteSection';
import SousTitreSection from '../Composants/Sections/General/SousTitreSection';
import TransitionVague from '../Decorations/TransitionVague';
import SousTitreAccueil from '../Composants/Sections/General/SousTitreAccueil';

//Accueil
import HeaderAccueil from '../Composants/Sections/Accueil/HeaderAccueil';
import AvenirAccueil from '../Composants/Sections/Accueil/AvenirAccueil';
import EnseignantsAccueil from '../Composants/Sections/Accueil/EnseignantsAccueil';
import ProjetsAccueil from '../Composants/Sections/Accueil/ProjetsAccueil';
import SectionCoursAccueil from '../Composants/Sections/Accueil/SectionCoursAccueil';
import SocialAccueil from '../Composants/Sections/Accueil/SocialAccueil';

//Avenir
import ListeCarrieres from '../Composants/Sections/Avenir/ListeCarrieres';
import ListeProgrammesUni from '../Composants/Sections/Avenir/ListeProgrammesUni';

//Cours
import CoursSection from '../Composants/Sections/Cours/CoursSection';

//Enseignants
import EnseignantsSection from '../Composants/Sections/Enseignants/EnseignantsSection';

//Projets
import ProjetsSection from '../Composants/Sections/Projets/ProjetsSection';

//Social
import CommunauteSection from '../Composants/Sections/Social/CommunauteSection';
import EvenementsSection from '../Composants/Sections/Social/EvenementsSection';
import MaisonneuveSection from '../Composants/Sections/Social/MaisonneuveSection';

export default function Section({section}){


    const {genre_sections} = useContext(DataContext);

    const [SectionComponent, setSectionComponent] = useState(null);
    useEffect(() => {
        const slugSection = getGenreSectionSlug();
        setSectionComponent(() => getSection(slugSection));
    })

    const getGenreSectionSlug = () => {
        const sectionTypeID = section.genre_section;
        const genreSection = genre_sections.filter((genre) => {
            if (genre.id === sectionTypeID) return true;
            return false;
        })
        const slugGenre = genreSection[0].nom_genre;
        return slugGenre;
    }

    const getSection = (sectionSlug) => {
        return typesSections[sectionSlug];
    }
    
    const typesSections = {
        "sectionTitre": <TitreSection backgroundColor={section.couleur_background_titre} color={section.couleur_titre}>{section.titre}</TitreSection>,
        "sectionTexte": <TexteSection backgroundColor={section.couleur_background_texte} color={section.couleur_texte}>{section.texte}</TexteSection>,
        "sectionSousTitre": <SousTitreSection backgroundColor={section.couleur_background_sous_titre} color={section.couleur_sous_titre}>{section.sous_titre}</SousTitreSection>,
        "sectionVagues": <TransitionVague
                            couleurBackgroundTransition={section.couleur_background_transition}
                            couleurBackground={section.couleur_background_courbe}
                            couleurCourbe={section.couleur_courbe}
                            clipPath={section.clip_path_vague}
                            minHeight={section.hauteur_vague}
                            transitionY={section.transitiony}
                            rotationX={section.rotationx}
                            isSimple={section.issimple}
                            isTransparent={section.istransparent}
                            position={section.position}
                            top={section.top}
                            bottom={section.bottom}
                        />,
        "sectionAccueilSousTitre": <SousTitreAccueil
                                        backgroundColor={section.couleur_background_accueil_sous_titre}
                                        couleurTexte={section.couleur_texte_accueil_sous_titre}
                                        premierMot={section.premier_mot_accueil_sous_titre}
                                        secondMot={section.second_mot_accueil_sous_titre}
                                        estSurLaGauche={section.est_sur_la_gauche}
                                    />,
        "sectionTitrePage": <TitrePage couleur={section.couleur_du_titre}>{section.titre_de_la_page}</TitrePage>,
        "sectionAccueilHeader": <HeaderAccueil
                                    titre={section.titre_accueil_header}
                                    slogan={section.slogan_accueil_header}
                                    videoSource={section.source_video_accueil_header}
                                    couleurBanniere={section.couleur_banniere_accueil_header}
                                    couleurCourbe={section.couleur_courbe_accueil_header}
                                />,
        "sectionAccueilAvenir": <AvenirAccueil
                                    carte1Texte={section.carte1_texte_accueil_avenir}
                                    carte1Titre={section.carte1_titre_accueil_avenir}
                                    carte2Texte={section.carte1_texte_accueil_avenir}
                                    carte2Titre={section.carte2_titre_accueil_avenir}
                                    carte3Texte={section.carte1_texte_accueil_avenir}
                                    carte3Titre={section.carte3_titre_accueil_avenir}
                                    boutonTexte={section.bouton_texte_accueil_avenir}
                                />,
        "sectionAccueilEnseignants": <EnseignantsAccueil
                                        boutonTexte={section.bouton_texte_accueil_enseignants}
                                    />,
        "sectionAccueilProjets": <ProjetsAccueil
                                    boutonTexte={section.bouton_texte_accueil_projets}
                                />,
        "sectionAccueilCours": <SectionCoursAccueil
                                    backgroundColor={section.couleur_background_accueil_cours}
                                    boutonTexte={section.bouton_texte_accueil_cours}
                                />,
        "sectionAccueilSocial": <SocialAccueil
                                    titre1={section.titre1_accueil_social}
                                    titre2={section.titre2_accueil_social}
                                    titre3={section.titre3_accueil_social}
                                    boutonTexte1={section.bouton1_texte_accueil_social}
                                    boutonTexte2={section.bouton2_texte_accueil_social}
                                    boutonTexte3={section.bouton3_texte_accueil_social}
                                />,
        "sectionListeCarrieres": <ListeCarrieres
                                    backgroundColor={section.couleur_background_avenir_carrieres}
                                    color={section.couleur_texte_avenir_carrieres}
                                />,
        "sectionListeProgrammesUniversitaires": <ListeProgrammesUni
                                                    backgroundColor={section.couleur_background_avenir_programmes_uni}
                                                />,
        "sectionCours": <CoursSection
                            couleurTitreSession={section.couleur_titre_session}
                            backgroundColor={section.couleur_background_cours}
                        />,
        "sectionEnseignants": <EnseignantsSection
                                    backgroundColor={section.couleur_background_enseignants}
                                />,
        "sectionProjets": <ProjetsSection
                                backgroundColor={section.couleur_background_projets}
                            />,
        "sectionCommunaute": <CommunauteSection
                                backgroundColor={section.couleur_background_communaute}
                                carte1Texte={section.carte1_texte_communaute}
                                carte1Titre={section.carte1_titre_communaute}
                                carte2Texte={section.carte2_texte_communaute}
                                carte2Titre={section.carte2_titre_communaute}
                                carte3Texte={section.carte3_texte_communaute}
                                carte3Titre={section.carte3_titre_communaute}
                            />,
        "sectionEvenements": <EvenementsSection
                                texte1={section.paragraphe1_evenements}
                                texte2={section.paragraphe2_evenements}
                                img1={section.source_de_limage1}
                                img2={section.source_de_limage2}
                                alt1={section.texte_image1}
                                alt2={section.texte_image2}
                            />,
        "sectionMaisonneuve": <MaisonneuveSection
                                backgroundColor={section.couleur_background_maisonneuve}
                                texte1={section.texte1_maisonneuve}
                                texte2={section.texte2_maisonneuve}
                                lien1={section.lien1_maisonneuve}
                                lien2={section.lien2_maisonneuve}
                                lienPlaceholder1={section.lien_placeholder1_maisonneuve}
                                lienPlaceholder2={section.lien_placeholder2_maisonneuve}
                                img={section.source_image_maisonneuve}
                            />
    }

    return (
        <div className="Section">
            {
                SectionComponent
            }
        </div>
    );
}
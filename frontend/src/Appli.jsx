import './Appli.scss';

//Hooks
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

//Pages
import PageAccueil from './Pages/PageAccueil';
import PageCours from './Pages/PageCours'
import PageSocial from './Pages/PageSocial';
import PageProjets from './Pages/PageProjets';
import PageAvenir from './Pages/PageAvenir';
import PageEnseignants from './Pages/PageEnseignants';
import Loading from './Pages/Loading';
import useChargerSite from './Hooks/useChargerSite';
import { DataContext } from './Context/DataContext';
import Menu from './Navigation/Menu';
import Footer from './Composants/Footer';

import { checkURLHorL } from './utils/checkURL';
import useIsOnScreen from './Hooks/useIsOnScreen';
import PageCustom from './Pages/PageCustom';

export default function Appli() { 

  const [isLoaded, setIsLoaded] = useState(false);
  const [siteData, setData]=  useState({
      menu: [],
      sessions: [],
      cours: [],
      enseignants: [],
      logo: "",
      projets: [],
      pages: [],
      carrieres: [],
      programmes_uni: [],
      type_cours: [],
      reseaux_sociaux: [],
      genre_sections: []
  });
  
  useChargerSite(setData, isLoaded, setIsLoaded);

  const getPage = (page) => {
    if (!pages[page.pageSlug]) {
      return {component: PageCustom, path: page.pageSlug};
    }
    return pages[page.pageSlug];
  }

  const pages = {
    "accueil" :  {component: PageAccueil, path: ""},
    "galerie-des-cours" : {component: PageCours, path: "galerie-des-cours"},
    "le-social" : {component: PageSocial, path: "le-social"},
    "avenir" : {component: PageAvenir, path: "avenir"},
    "galerie-des-projets" : {component: PageProjets, path: "galerie-des-projets"},
    "les-enseignants" : {component: PageEnseignants, path: "les-enseignants"}
  }

  // const ref = useRef();
  // const isVisible = useIsOnScreen(ref);

  const footerViewState = useState(false);

  // useEffect(() => {
  //     setFooterView(isVisible);
  // });
  // console.log(footerView);

  return (
    <DataContext.Provider value={siteData}>
          <div className="Appli">
            <Loading isLoading={!isLoaded}/>
            {
              (isLoaded) ? 
              <>
              <Menu siteData={siteData}/>
              <Routes>
                {
                  (siteData.menu.data.header.headerMenuItems != null)
                  ?
                  siteData.menu.data.header.headerMenuItems.map(
                    page => {
                      
                      const Page = getPage(page);
                      console.log(Page.component);
                      return <Route key={page.ID} path={checkURLHorL()+Page.path} element={<Page.component id={page.pageID} footerViewState={footerViewState} /*ref={(page.pageSlug == "") ? ref : ""}*//>}></Route>
                    }
                  )
                  :
                  <Route>No pages...</Route>
                }
              </Routes>
              <Footer menu={siteData.menu} footerView={footerViewState[0]}></Footer>
              </>
              : <></>
            }
          </div>
    </DataContext.Provider>
  );
}

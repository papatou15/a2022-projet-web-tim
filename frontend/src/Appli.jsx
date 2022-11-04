import './Appli.scss';

//Hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//Navigation
import Burger from './Navigation/Burger';
import Navigation from './Navigation/Navigation';

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
  });
  
  useChargerSite(setData, isLoaded, setIsLoaded);

  const getPage = (page) => {
    return pages[page.pageSlug];
  }

  const pages = {
    "accueil" : PageAccueil,
    "galerie-des-cours" : PageCours,
    "le-social" : PageSocial,
    "avenir" : PageAvenir,
    "galerie-des-projets" : PageProjets,
    "les-enseignants" : PageEnseignants
  }

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
                      return <Route key={page.ID} path={'/'+page.pageSlug} element={<Page id={page.pageID}/>}></Route>
                    }
                  )
                  :
                  <Route>No pages...</Route>
                }
              </Routes>
              </>
              : <></>
            }
            
          </div>
      
    </DataContext.Provider>
  );
}

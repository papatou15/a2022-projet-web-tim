import './Appli.scss';

import { Routes, Route } from 'react-router-dom';
import { useState} from 'react';

import { DataContext } from './Context/DataContext';
import { checkURLHorL } from './utils/checkURL';
import { FooterContext } from './Context/FooterContext';

import Loading from './Pages/Loading';
import useChargerSite from './Hooks/useChargerSite';
import Menu from './Navigation/Menu';
import Footer from './Composants/Footer';
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
      if (page.pageSlug === "accueil") {
        return {component: PageCustom, path: "/"};
      }
      return {component: PageCustom, path: page.pageSlug};
  }

  // Visibilité du footer
  const footerViewState = useState(true);

  return (
    <FooterContext.Provider value={footerViewState}>
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
                        const PageComponent = Page.component;
                        return <Route key={page.ID} path={checkURLHorL()+Page.path} element={<PageComponent id={page.pageID}/>}></Route>
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
    </FooterContext.Provider>
  );
}

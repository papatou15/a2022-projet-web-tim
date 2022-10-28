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
      pages: [],
      sessions: [],
      cours: [],
      enseignants: [],
      logo: "",
      projets: []
  });
  
  useChargerSite(setData, isLoaded, setIsLoaded);

  const routes = [
    {
      key: 'accueil',
      path: '/',
      component: () => <PageAccueil/>
    },
    {
      key: 'cours',
      path: '/galerie-des-cours',
      component: () => <PageCours/>
    }, 
    {
      key: 'social',
      path: '/le-social',
      component: () => <PageSocial/>
    },
    {
      key: 'avenir',
      path: '/avenir',
      component: () => <PageAvenir/>
    },
    {
      key: 'projets',
      path: '/galerie-des-projets',
      component: () => <PageProjets/>
    }, 
    {
      key: 'enseignants',
      path: '/les-enseignants',
      component: () => <PageEnseignants/>
    }, 
  ];

  return (
    <DataContext.Provider value={siteData}>
      {
          (!isLoaded) 
          ?
          <Loading isLoading={isLoaded}/>
          :
          <div className="Appli">

            <Menu siteData={siteData}/>
            <Routes>
              {
                (siteData.pages != null)
                ?
                routes.map(
                  route => <Route key={route.key} path={route.path} element={<route.component/>}></Route>
                )
                :
                <Route>No pages...</Route>
              }
            </Routes>
          </div>
      }
      
    </DataContext.Provider>
  );
}

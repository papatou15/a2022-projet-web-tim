import './Appli.scss';

//Hooks
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from './Hooks/useFetch';

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
import useChargerPage from './Hooks/useChargerSite';

export default function Appli() { 

  // const [siteData, setSiteData] = useState([]);

  const [navOpenState, setNavOpenState] = useState(false);
  // const [isLoadingState, setIsLoadingState] = useState(true);

  // useEffect(() => {
  //   if(siteData != null)
  //   {
  //     setIsLoadingState(false);
  //   }
  // }, [siteData]);

  const pages = useFetch('https://timm184.sg-host.com/wp-json/wp/v2/pages');
  const toggleMenu = () => {
      setNavOpenState(!navOpenState);
  };

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
    <div className="Appli">
      <Burger onClick={toggleMenu}/>
      <Navigation navOpenState={navOpenState} toggleMenu={toggleMenu} pages={pages}/>
      <Routes>
        {
          (pages != null)
          ?
          routes.map(
            route => <Route key={route.key} path={route.path} element={<route.component/>}></Route>
          )
          :
          <Route>No pages...</Route>
        }
      </Routes>
      {/* <Loading isLoading={isLoadingState}/> */}
    </div>
  );
}

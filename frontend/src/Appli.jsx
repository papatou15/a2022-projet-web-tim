import './Appli.scss';

//Hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './Hooks/useFetch';

//Navigation
import Burger from './Navigation/Burger';
import Navigation from './Navigation/Navigation';

//Pages
import Home from './Pages/Home';
import Cours from './Pages/Cours'
import Social from './Pages/Social';
import Projets from './Pages/Projets';
import Avenir from './Pages/Avenir';
import Enseignants from './Pages/Enseignants';

export default function Appli() {

  const pages = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/pages');

  const [navOpenState, setNavOpenState] = useState(false);

    const toggleMenu = () => {
      setNavOpenState(!navOpenState);
  };

  const routes = [
    {
      key: 'accueil',
      path: '/',
      component: () => <Home/>
    },
    {
      key: 'cours',
      path: '/galerie-des-cours',
      component: () => <Cours/>
    }, 
    {
      key: 'social',
      path: '/le-social',
      component: () => <Social/>
    },
    {
      key: 'avenir',
      path: '/avenir',
      component: () => <Avenir/>
    },
    {
      key: 'projets',
      path: '/galerie-des-projets',
      component: () => <Projets/>
    }, 
    {
      key: 'enseignants',
      path: '/les-enseignants',
      component: () => <Enseignants/>
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
    </div>
  );
}

import './Appli.scss';
import Classes from './Classes';
import Posts from './Posts.jsx';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
import Home from './Home';
import Page from './Page';

export default function Appli() {

  const pages = useFetch('http://localhost:8080/projet-web-5w5/index.php/wp-json/wp/v2/pages');

  console.log(pages);

  return (
    <div className="Appli">
      <Header pages={pages}></Header>
      <Routes>
        {
          (pages != null)
          ?
          pages.map(
            page => (page.slug == 'accueil') 
            ?
            <Route key={page.id} path={'/'} element={<Home/>}></Route>
            :
            <Route key={page.id} path={'/' + page.slug} element={<Page/>}></Route>
          )
          :
          <Route>No pages...</Route>
        }
      </Routes>
    </div>
  );
}

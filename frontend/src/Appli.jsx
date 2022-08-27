import './Appli.scss';
import Classes from './Classes';
import Posts from './Posts.jsx';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';

export default function Appli() {
  return (
    <div className="Appli">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Posts />}></Route>
        <Route path='/cours' element={<Classes />}></Route>
      </Routes>
    </div>
  );
}

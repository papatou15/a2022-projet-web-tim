import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'normalize.css';
import Appli from './Appli';
import { HashRouter } from 'react-router-dom';

const eltRacine = ReactDOM.createRoot(document.getElementById('racine'));
eltRacine.render(
  <React.StrictMode>
    <HashRouter>
      <Appli />
    </HashRouter>
  </React.StrictMode>
);

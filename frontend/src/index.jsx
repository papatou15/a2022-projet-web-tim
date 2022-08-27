import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Appli from './Appli';
import { BrowserRouter } from 'react-router-dom';

const eltRacine = ReactDOM.createRoot(document.getElementById('racine'));
eltRacine.render(
  <React.StrictMode>
    <BrowserRouter>
      <Appli />
    </BrowserRouter>
  </React.StrictMode>
);

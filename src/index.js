import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  
);


reportWebVitals();

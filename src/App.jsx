import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Displayheader from './Header/Displayheader';
import Displayfooter from './Footer/Displayfooter';
import Accueil from './Accceuil/Accueil';
import Carrousel from "./Caroussel/Carrousel";
import {Routes,Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    </Routes>
   <Displayheader/>
   <Accueil/>
   <Carrousel/>
   <Displayfooter/>
   </BrowserRouter>
  );
}

export default App;

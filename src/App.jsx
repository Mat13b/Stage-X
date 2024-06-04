import React from 'react'
import './App.css'
import Displayheader from './Header/Displayheader';
import Displayfooter from './Footer/Displayfooter';
import Accueil from './Accceuil/Accueil';
import NosServices from './NosServices/Services';
import Allgame from './Allgame2/Allgame';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Produit from './Produit/Produit';

function App() {

  return (
    <BrowserRouter>
      <Displayheader/>

      <Routes>
        <Route path="/Accueil" element={<Accueil/>}/>
        <Route path="/Nosproduits/*" element={<Allgame/>}/>
        <Route path="/NosServices" element={<NosServices />} />
        <Route path="/Instrument" element={<Produit />} />
        <Route path="/Vinyles" element={<Produit />} />
        <Route path="/CD" element={<Produit />} />
      </Routes>
      <Displayfooter/>
    </BrowserRouter>
  );
}

export default App;

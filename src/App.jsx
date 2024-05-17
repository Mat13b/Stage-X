import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Displayheader from './Header/Displayheader';
import Displayfooter from './Footer/Displayfooter';
import Accueil from './Accceuil/Accueil';
import Caroussel from "./Caroussel/Carrousel";

function App() {

  return (
    <>
   <Displayheader/>
   <Accueil/>
   <Caroussel/>
   <Displayfooter/>
   </>
  );
}

export default App
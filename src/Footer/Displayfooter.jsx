import React from "react";
import img from "../assets/twitter (1).png"
import img1 from "../assets/facebook (1).png";
import img2 from "../assets/instagram (1).png";
import img3 from "../assets/github.png"
import Button from '@mui/material/Button';
function Displayfooter() {
    return (
        <footer> 
            <div className="nav" >
                <section>
             <h1>Nos actualité</h1>
             <input type="text" 
             placeholder="Entrez Votre adresse mail"
             />
             <Button variant="contained">Envoyé</Button>
           </section> 
           <section>
               <h1>Navigation</h1>
                <a href="">Accueil</a>
                <a href="">Les produits</a>
                <a href="">Les services proposés</a>
                </section>
                <h1>Nous Suivre sur nos resseaux</h1>
                <div className="logo">
               <img src={img} alt="" width="60"  height="60px"/>
               <img src={img3} alt="" width="60" height="60px"/>
               <img src={img2} alt="" width="60" height="60px"/>
               <img src={img1} alt="" width="60" height="60px"/> 
                </div>
               </div>
        </footer>
      
    );
}
export default Displayfooter
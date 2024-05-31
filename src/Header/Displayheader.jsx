import React from "react";
import img from "../assets/en-chantant.png";
import img1 from "../assets/bouton-de-compte-rond-avec-lutilisateur-a-linterieur.svg";
import img2 from "../assets/paniers.svg";



function Displayheader() {
    return (
        <header>
            <nav>
         <div className="link">
            <section className="Playball">
            <h1 style={{ margin: 0 }}>Vinrix</h1>
            <img src={img} alt="micro" width="50px"/>  
            </section>  
            <div className="nav">
                <a href="Accueil">Accueil</a>
                <a href="Nosproduits">Nos produits</a>
                <a href="Nosservices">Nos services</a>
                </div>
                <img src={img1} alt="compte" width="40px"/>
                <img src={img2} alt="panier" width="40px"/>
             </div>
        </nav>
        </header>
    );
}

export default Displayheader
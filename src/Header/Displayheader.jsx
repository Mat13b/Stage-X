import React from "react";
import img from "../assets/blue-light-wave-effect-transparent-background_52683-26879.png"
function Displayheader() {
    return (
        <header>
        <nav>
         <div className="link">
            <section>
            <h1>Vinrix</h1>
            <img src={img} alt="vague" width="80px"/> 
            </section>
                <a href="#">Accueil</a>
                <a href="#">Nos produits</a>
                <a href="#">Nos services</a>
            </div>
        </nav>
        </header>
    );
}

export default Displayheader
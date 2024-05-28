import React from "react";
import Button from "@mui/material/Button";
import image1 from "../assets/twitter (1).png";
import image2 from "../assets/facebook (1).png";
import image3 from "../assets/instagram (1).png";
import image4 from "../assets/github.png";
import image5 from "../assets/en-chantant.png";
function Displayfooter() {
  return (
    <footer>
      <div className="nav">
        <section>
          <h1>Nos actualité</h1>
          <input type="text" placeholder="Entrez Votre adresse mail" />
          <Button 
            style={{
                backgroundColor: "#6868C0",
                 color: "white"
                }}
          >Envoyé
          <img src={image5} alt="micro" width="30px" height="30px" />
          </Button>
        </section>
        <section>
          <h1>Navigation</h1>
          <div className="container">
        <ul>
          <li><a href="">Accueil</a></li>
          <li><a href="">Les produits</a></li>
          <li><a href="">Les services proposés</a></li>
          </ul>
          </div>
        </section>

        <h1>Nous Suivre sur nos resseaux</h1>
        <div className="logo-rs">
          <img src={image4} alt="" width="50px" height="50px" />
          <img src={image3} alt="" width="50px" height="50px" />
          <img src={image2} alt="" width="50px" height="50px" />
          <img src={image1} alt="" width="50" height="50px" /> 
          </div>
        </div>
    </footer>
  );
}
export default Displayfooter;

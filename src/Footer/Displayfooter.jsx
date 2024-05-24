import React from "react";
import Button from "@mui/material/Button";
import img from "../assets/twitter (1).png";
import img1 from "../assets/facebook (1).png";
import img2 from "../assets/instagram (1).png";
import img3 from "../assets/github.png";
import img4 from "../assets/en-chantant.png";
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
          <img src={img4} alt="micro" width="30px" height="30px" />
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
          <img src={img} alt="" width="50px" height="50px" />
          <img src={img3} alt="" width="50px" height="50px" />
          <img src={img2} alt="" width="50px" height="50px" />
          <img src={img1} alt="" width="50" height="50px" /> 
          </div>
        </div>
    </footer>
  );
}
export default Displayfooter;

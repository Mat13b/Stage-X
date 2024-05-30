import React, { useState } from "react";
import Button from "@mui/material/Button";
import image1 from "../assets/twitter (1).png";
import image2 from "../assets/facebook (1).png";
import image3 from "../assets/instagram (1).png";
import image4 from "../assets/github.png";
import image5 from "../assets/en-chantant.png";

function Displayfooter() {

  const [validEmail, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Adresse email invalide");
    } else {
      setEmailError('');
    }
  };

  return (
    <footer>
      <div className="nav">
        <section>
          <h1 style={{ margin: 0 }}>Nos actualité</h1>
          <input
           type="text"
            placeholder="Entrez Votre adresse mail" 
            style={{
              border: emailError ? '2px solid red' : '2px solid black',
            }}
            value={validEmail}
            onChange={handleEmailChange}
            />
          {emailError && <p style={{color: 'red'}}>{emailError}</p>}
          <Button 
            style={{
                backgroundColor: "#6868C0",
                 color: "white",
                 
                }}
          >Envoyé
          <img src={image5} alt="micro" width="30px" height="30px" />
          </Button>
        </section>
        <section>
          <h1>Navigation</h1>
          <div className="container">
        <ul>
          <li><a href="/Accueil">Accueil</a></li>
          <li><a href="/Nosproduits">Les produits</a></li>
          <li><a href="/NosServices">Les services proposés</a></li>
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

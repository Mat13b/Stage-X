import React, { useState } from "react";
import Button from "@mui/material/Button";
import image1 from "../assets/twitter (1).png";
import image2 from "../assets/facebook (1).png";
import image3 from "../assets/instagram (1).png";
import image4 from "../assets/github.png";
import image5 from "../assets/en-chantant.png";

function Displayfooter() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Adresse email invalide ! Veuillez réessayer");
      setEmailSuccess('');
    } else {
      setEmailError('');
      setEmailSuccess('Votre adresse email est valide');
    }
  };

  return (
    <footer>
      <div className="nav">
        <section>
          <h1 style={{ margin: 0 }}>Nos actualités</h1>
          <input
           type="text"
            placeholder="Entrez votre adresse mail" 
            style={{
              border: emailError ? '2px solid red' : emailSuccess ? '2px solid green' : '2px solid black'
            }}
            value={email}
            onChange={handleEmailChange}
            />
          {emailError ? <p style={{color: 'red', fontWeight: 'bold'}}>{emailError}</p> : null}
          {emailSuccess ? <p style={{color: 'green', fontWeight: 'bold'}}>{emailSuccess}</p> : null}
          <Button 
            style={{
                backgroundColor: "#6868C0",
                 color: "white",
                 
                }}
          >Envoyer
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
        <h1>Nous Suivre sur nos réseaux</h1>
        <div className="logo-rs">
        <a href="https://github.com/Mat13b"><img src={image4} alt="" width="50px" height="50px" /></a>
          <a href="https://www.facebook.com/ac.at.7"><img src={image3} alt="" width="50px" height="50px" /></a>
          <a href="https://www.instagram.com/mathieume740/"><img src={image2} alt="" width="50px" height="50px" /></a>
          <a href="https://x.com/Mathieuschmit16"><img src={image1} alt="" width="50" height="50px" /></a>
          </div>
        </div>
    </footer>
  );
}
export default Displayfooter;

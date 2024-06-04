import React from "react";
import img from "../assets/en-chantant.png";
import img1 from "../assets/bouton-de-compte-rond-avec-lutilisateur-a-linterieur.svg";
import img2 from "../assets/paniers.svg";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

function Displayheader() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
                    <button className="panier"
                    onClick={handleOpen}>
                        <img src={img2} alt="panier" width="40px"/>
                    </button>
                </div>
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                aria-label="modal-trigger"
            >
                <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 1 }}>
                    <h2 id="modal-title">Votre Panier</h2>
                    <p id="modal-description">Votre panier est actuellement vide</p>
                </Box>
            </Modal>
        </header>
    );
}

export default Displayheader
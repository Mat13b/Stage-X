import React, { useState, useEffect } from "react";
import { Paper } from '@mui/material';
import allgame from '../Data/allgame1.json'; 

function Produit() {
    const [produits, setProduits] = useState([])

    useEffect(() => {
        setProduits(allgame); 
    }, []);

    return (
        <div>
            <h2>Instrument</h2>
            <main>
            {produits.map(produit => (
                console.log(produit),
                <div key={produit.id}>
                    <h2>{produit.description}</h2>
                    <img src={produit.imageUrl} alt={produit.titre} width={200} height={200}/>
                </div>
                 
            ))}
            </main>
        </div>
    );
}

export default Produit;
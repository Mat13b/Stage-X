import React, { useState, useEffect } from "react";
import data from './Data.json'
import image from '../assets/la-musique.svg';
import Button from '@mui/material/Button';

function Produit() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        setProduits(data); 
    }, []);

    return (
        <div>
        <h2>Tout les Instruments</h2>
        <main>
        {produits.map(produits => {
            return (
                <div key={produits.id}
                style={{
                    backgroundColor: '#F0F0F0',
                    gap: '20px',
                    borderRadius: '20px'
                    }}
                    >
                        <h3>{produits.caption}</h3>
                        <img src={produits.url} alt="musique" width={200} height={150}/>
                        <p>{produits.description}</p> 
                        <img src={image} alt="musique" width={50} height={50}/>
                        <Button 
                        style={{
                            backgroundColor: '#6868C0', 
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                         >
                            {produits.prix}
                        </Button>
                </div>
               
            );
        })}
        </main>
    </div>
    );
}

export default Produit;
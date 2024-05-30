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
        <main style={{
            display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px' 
    }}
    >
        {produits.map(produit => {
            return (
                <div key={produit.id}
                style={{
                    backgroundColor: '#F0F0F0',
                    borderRadius: '25px',
                    flex: '1',
                    padding: '10px',
                    margin: '10px',
                    }}
                    >
                        <h3>{produit.caption}</h3>
                        <img src={produit.url} alt="musique" width={200} height={150}/>
                        <p>{produit.description}</p> 
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
                            {produit.prix}
                        </Button>
                </div>
               
            );
        })}
        </main>
    </div>
    );
}

export default Produit;
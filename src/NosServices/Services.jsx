import React from 'react';
import Button from '@mui/material/Button';
import img from '../assets/en-train-de-regarder.png'

function NosServices() {
    return (
        <div>
            <h3 className='user'>
             Inscrivez-vous dès maintenant pour <br />profiter d'avantages exclusifs réservés <br />aux membres</h3>
            <h2>En devenant membre , vous pouvez </h2>
            <h3>Livraison gratuite dès 45 € d’achat</h3>
            <h3>un acheté , un offert</h3>
            <Button 
             sx={{
                width: '15%',
                color: 'white',
                backgroundColor: '#6868C0',
                margin: '30px',
                display: 'flex',
              }}
            >
                Voir condition 
                <img src={img} alt="img" width="20px" height="20px"/>
               
            </Button> 
            <h3>Programme de fidelité</h3>
            <Button
             sx={{
                width: '15%',
                color: 'white',
                backgroundColor: '#6868C0',
                margin: '30px',
              
              }}
            >
                Voir conditions
                <img src={img} alt="img" width="20px" height="20px"/>
            </Button>
            
        </div>
    );
}

export default NosServices;

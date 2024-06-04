import React from 'react';
import Button from '@mui/material/Button';
import img from '../assets/en-train-de-regarder.png'

function NosServices() {
    return (
        <div>
            <h3 className='user'>
             Inscrivez-vous dès maintenant pour <br />profiter d'avantages exclusifs réservés <br />aux membres</h3>
            <h2>En devenant membre , vous pouvez </h2>
            <h4>Livraison gratuite dès 350 € d’achat</h4>
            <div className='btn'>
            <h4>un acheté , un offert</h4>
            <Button 
             sx={{
                width: '15%',
                color: 'white',
                backgroundColor: '#6868C0',
                borderRadius: '20px'
              }}
            >
                Voir condition 
                <img src={img} alt="img" width="20px" height="20px"/>
            </Button> 
            </div>
           <div className='btn'>
            <h4>Programme de fidelité</h4>
            <Button
             sx={{
                width: '15%',
                color: 'white',
                backgroundColor: '#6868C0',
                borderRadius: '20px'
              }}
            >
                Voir conditions
                <img src={img} alt="img" width="20px" height="20px"/>
            </Button>
            </div>
        </div>
    );
}

export default NosServices;

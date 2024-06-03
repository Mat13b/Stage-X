import React from 'react'
import Button from '@mui/material/Button';
import image from '../assets/en-train-de-regarder.png';
import { Link } from 'react-router-dom';
function Accueil() {
    return (
        <div>   
            <h2>les nouveautés du moment</h2> 
        <div className='accueil'> 
            <h3>De la nouveauté à la nostalgie du vintage, trouvez la musique qui vous fait vibrer <br />En explorant chaque mois des nouveautés instrumentales qui vous fera retourner dans les années 80.</h3> 
             </div>
            <h3 className='use'> 
            explorez notre catalogue pour une expérience musicale immersive</h3>
           <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
            style={{
                backgroundColor: "#6868C0",
                 margin: "1vw",
                 color: "white",
                }}
          >
            <Link to="/Nosproduits" style={{color: "white", display: 'flex', alignItems: 'center'}}>
                Découvrir
                <img src={image} alt="micro" style={{ width: '3vw', height: '2vw' }}/>
            </Link>
            </Button>
           <Button
            style={{
                backgroundColor: "#6868C0",
                 margin: "1vw",
                 color: "white",
                }}
                >
                    <Link to="/Nosproduits" style={{color: "white", display: 'flex', alignItems: 'center'}}>
                        En savoir plus
                        <img src={image} alt="micro" style={{ width: '3vw', height: '2vw' }}/>
                    </Link>
            </Button> 
            </div>
        </div>
    );
}

export default Accueil
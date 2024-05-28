import React from 'react'
import Button from '@mui/material/Button';
import image from '../assets/en-train-de-regarder.png';
function Accueil() {
    return (
        <div>   
            <h2>les nouveautés du moment</h2> 
        <div className='accueil'> 
            <h3>De la nouveauté à la nostalgie du vintage , trouvez la musique qui vous fait vibrer<br />En explorant chaque mois des nouveauté instrumentale qui vous fera retourner dans les années 80 <br /></h3> 
        </div>
            <h3 className='use'> 
            explorez notre catalogue pour une expérience <br />musicale immersive </h3>
            <Button
            style={{
                backgroundColor: "#6868C0",
                 color: "white",
                 marginLeft: "32%",
                 marginRight: "13%",
                }}
          >Decouvrir
                <img src={image} alt="micro" width="50px" height="30px"/>
            </Button>
           <Button
            style={{
                backgroundColor: "#6868C0",
                 color: "white",
                
                }}
                  >En savoir plus
                  <img src={image} alt="micro" width="50px" height="30px"/>
            </Button> 
            </div>
    );
}

export default Accueil
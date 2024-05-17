import React from 'react'
import Button from '@mui/material/Button';

function Accueil() {
    return (
        <div>
            <h2>les nouveautés du moment</h2>
            <h3>De la nouveauté à la nostalgie du vintage , trouvez la musique qui vous fait vibrer<br />En explorant chaque mois des nouveauté instrumentale qui vous fera retourner dans les années 80 <br /></h3> 
            <h3 className='use'> 
            explorez notre catalogue pour une expérience <br />musicale immersive </h3>
            <Button 
            variant="contained"
            >
                Decouvrir
                </Button>
                <Button
                 variant="contained"
                 >En savoir plus
                 </Button> 
            
        </div>
    )
}

export default Accueil
import { Routes, Route, Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import Produit from '../Produit/Produit.jsx';
import image from '../assets/Guitare.jpg';
import image2 from '../assets/Vinyles.jpg';
import image3 from '../assets/CD.jpg';

function Allgame() {
  return (
    <div>
      <h2>Tout nos produits</h2>
      <main className='maine'>
        <Paper style={{
           backgroundImage: `url(${image})`,
           width: '22%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           margin: '3%',
           }}
           >
          <Link to='/Instrument' className='Instruments'>Instrument</Link>
        </Paper>
        <Paper style={{ 
          backgroundImage: `url(${image2})`,
           width: '22%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           margin: '3%',
        }}>
          <Link to='/Vinyles' className='Instruments'>Vinyles</Link>
        </Paper>
        <Paper style={{
           backgroundImage: `url(${image3})`,
           width: '22%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           margin: '3%',
        }}>
          <div>
            <Link to='/CD' className='Instruments'>CD</Link>
          </div>
        </Paper>
      </main>
      <Routes>
        <Route path='/Instrument' element={<Produit />} />
        <Route path='/Vinyles' element={<Produit />} />
        <Route path='/CD' element={<Produit />} />
      </Routes>
    </div>
  );
}

export default Allgame;
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
        <div style={{
           backgroundImage: `url(${image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           width: '20%',
           margin: '5%',
        }}>
          <Link to='/Instrument' className='Instruments'>Instruments</Link>
        </div>
        <div style={{ 
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '20%',
          margin: '5%',
        }}>
          <Link to='/Vinyles' className='Instruments'>Vinyles</Link>
        </div>
        <div style={{
           backgroundImage: `url(${image3})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           width: '20%',
           margin: '5%',
        }}>
          <Link to='/CD' className='Instruments'>CD</Link>
        </div>
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
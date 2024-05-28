import { Routes, Route, Link } from 'react-router-dom';
import Produit from '../Produit/Produit.jsx';
 import image from '../assets/Guitare.jpg';
 import image2 from '../assets/Vinyles.jpg';
 import image3 from '../assets/CD.jpg';

function Allgame() {
  return (
    <div>
      <h2>Tout nos produits</h2>
      <main>
        <div style={{
           backgroundImage: `url(${image})`,
           width: '20%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           }}
           >
          <Link to='Instrument' className='Instruments'>Instrument</Link>
        </div>
        <div style={{ 
          backgroundImage: `url(${image2})`,
           width: '20%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
        }}>
          <Link to='Vinyles' className='Instruments'>Vinyles</Link>
        </div>
        <div style={{
           backgroundImage: `url(${image3})`,
           width: '20%',
           height: '20%',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
        }}>
          <div>
            <Link to='CD' className='Instruments'>CD</Link>
          </div>
        </div>
      </main>
      <Routes>
        <Route path='Instrument' element={<Produit />} />
        <Route path='Vinyles' element={<Produit />} />
        <Route path='CD' element={<Produit />} />
      </Routes>
    </div>
  );
}

export default Allgame;
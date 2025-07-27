
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import Accessories_banner from './components/Assets/Frontend_Assets/banner_Accessories.png';
import Gifts_banner from './components/Assets/Frontend_Assets/banner_Gifts.png';
import Art_banner from './components/Assets/Frontend_Assets/banner_Art.png';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Shop/>}/>
         <Route path='/Accessories' element={<ShopCategory banner={Accessories_banner} category="Accessories"/>}/>
         <Route path='/Gifts' element={<ShopCategory banner={Gifts_banner} category="Gifts"/>}/>
         <Route path='/Art' element={<ShopCategory banner={Art_banner} category="Art"/>}/>
         <Route path="/product" element={<product/>}>
            <Route path=':productId' element={<product/>}/>
         </Route>
         <Route path='/cart' element={<cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;


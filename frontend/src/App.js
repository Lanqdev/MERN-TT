
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import { Product } from './Components/Pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kid_banner from './Components/Assets/Frontend_Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/tab2" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/tab3" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/tab4" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

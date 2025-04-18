import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import LogiSignup from "./Pages/LogiSignup";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
       
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogiSignup />} />
        </Routes>
        <ShopCategory/>
      </BrowserRouter>
                       
      <Footer/>
    </div>
  );
}

export default App;

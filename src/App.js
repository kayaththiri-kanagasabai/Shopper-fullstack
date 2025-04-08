import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import LogiSignup from "./Pages/LogiSignup";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import Items from "./Components/Item/Item";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
       
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kid' element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogiSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

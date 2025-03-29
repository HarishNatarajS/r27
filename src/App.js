import './App.css';
import Account from './pages/Account.js'; 
import Shop from './pages/Shop.js';  
import Home from './pages/Home.js';  
import Compare from './pages/Compare.js';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WishList from './pages/WishList.js';
import Cart from './pages/Cart.js';
import CheckOut from './pages/CheckOut.js';
import Detail from './pages/Detail.js';
import Signup from './pages/Signup.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/details.html" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

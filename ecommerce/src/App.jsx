import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ShopCatagories from "./pages/ShopCatagories.jsx";
import Details from "./pages/Details.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import BoughtItems from "./pages/BoughtItems.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product, quantity) {
    console.log('Adding to cart:', product);
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    setCartItems([...cartItems, { ...product, quantity }]);
  }
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shopCatagories" element={<ShopCatagories addToCart={addToCart} />} />
          <Route
            path="/details/:productId"
            element={<Details addToCart={addToCart} />}
          />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/boughtItems"
            element={<BoughtItems />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;

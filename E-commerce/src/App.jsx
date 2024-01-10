import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Products from "./pages/Products.jsx";
import SingleProducts from "./pages/SingleProducts.jsx";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProducts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

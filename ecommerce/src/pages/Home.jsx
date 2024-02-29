import { useState } from 'react';
import { Link } from 'react-router-dom';
import catagorydata from '../catagorydata.js';
import Products from './Products.jsx';
import ShopCatagories from './ShopCatagories';
import img1 from '/assets/Images/catagory1.jpg'

function Home() {
  const cdata = catagorydata;

  return (
    <div className="main">
      <h1>Welcome to our online shop</h1>
      <h1>Catagories</h1>
      <Link to="/shopCatagories">
        <Button>Button</Button>
      </Link>
      <div className="catagories">
        {cdata.map((data, i) => (
          <Products key={i} data={data} />
        ))}
      </div>
      <h1>Our latest arrivals</h1>
      <Link to="/shopCatagories">
        <Button>Button1</Button>
      </Link>
      <div className="catagories">
        <ProductList src="/assets/Images/10.jpg" description="Premium Smart Watch (Black)" />
        <ProductList src="/assets/Images/iphone15.jpg" description="iPhone 15 Pro Max (Brand New)" />
        <ProductList src="/assets/Images/7.jpg" description="Smart Watch with Latest Android OS" />
      </div>
      <h1>Our Products</h1>
      <Link to="/shopCatagories">
        <Button>Button2</Button>
      </Link>
      <div className="catagories">
        <ProductList src={img1} description="Headphone" />
        <ProductList src="/assets/Images/8.jpg" description="Multi-color modern shoe" />
        <ProductList src="/assets/Images/6.jpg" description="Logitech Gamepad White for PC/PS3" />
      </div>
    </div>
  );
}

function Button({ children }) {
  return <div className='btn'>{children}</div>;
}

function ProductList({ src, description }) {
  const [mouse, setMouse] = useState(false);

  const handleMouseOver = () => {
    setMouse(true);
  };

  const handleMouseOut = () => {
    setMouse(false);
  };

  return (
    <Link to="/shopCatagories">
      <div className="product" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src={src} alt="Product" />
        {mouse && <h3>{description}</h3>}
      </div>
    </Link>
  );
}

export default Home;

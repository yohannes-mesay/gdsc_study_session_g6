import { NavLink } from "react-router-dom";
import '../index.css'
const Header = () => {
  return (<header className="header">
  
        <nav >
          <NavLink to="/" className="home">
            Home
          </NavLink>
          <NavLink to="shopcatagories" className="shopcat">
            ShopCatagories/Items
          </NavLink>
          <NavLink to="cart" className="cart">
            🛒Cart
          </NavLink> 
          <NavLink to="details" className="details">
          </NavLink>  
           <NavLink to="boughtItems" className="details">
          </NavLink>

        </nav>
    </header>
  );
};

export default Header;

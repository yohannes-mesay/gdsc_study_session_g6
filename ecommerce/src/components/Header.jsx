import { NavLink } from "react-router-dom";
import '../index.css'
const Header = () => {
  return (<header className="header">
  
        <nav >
          <NavLink to="/" className="home">
            Home
          </NavLink>
          <NavLink to="about" className="shopcat">
            ShopCatagories/Items
          </NavLink>
          <NavLink to="posts" className="cart">
            🛒Cart
          </NavLink>

        </nav>
    </header>
  );
};

export default Header;

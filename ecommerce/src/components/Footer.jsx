import { NavLink } from "react-router-dom";
import '../index.css'
const Footer = () => {
  return (<footer className="footer">
        <nav className="footer">
        <NavLink to="/" className="home">
            Home
          </NavLink>
          <NavLink to="shopcatagories" className="shopcat">
            ShopCatagories/Items
          </NavLink>
          <NavLink to="cart" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
            Cart
          </NavLink>

        </nav>
    </footer>
  );
};

export default Footer;

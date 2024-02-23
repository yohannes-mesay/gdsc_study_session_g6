import { NavLink } from "react-router-dom";
import '../index.css'
const Footer = () => {
  return (<footer className="footer">
        <nav className="footer">
          <NavLink to="/" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="about" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
            ShopCatagories/Items
          </NavLink>
          <NavLink to="posts" className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>
            Cart
          </NavLink>

        </nav>
    </footer>
  );
};

export default Footer;

import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="navbar">
          <img className="logo" src={logo} alt="logo" />
          <ul className="menu">
            <Link to="/">
              <li className="item">
                <p>Home</p>
              </li>
            </Link>

            <Link to="/addMobile">
              <li className="item">
                <p>Add</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

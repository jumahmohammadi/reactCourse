import { Link, NavLink } from "react-router-dom";
import "./style.css";
function Header(){
    return (
        <div>
              <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
              </ul>

              <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/use-effect">Use Effect</NavLink>
                </li>

                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>

                <li>
                    <NavLink to="/context">Context</NavLink>
                </li>
                <li>
                    <NavLink to="/reducer">Redecuer</NavLink>
                </li>

                <li>
                    <NavLink to="/call-back">Call Back </NavLink>
                </li>

                <li>
                    <NavLink to="/ref">Ref </NavLink>
                </li>

                <li>
                    <NavLink to="/custom-hook">Custom Hook </NavLink>
                </li>


              </ul>
        </div>
    )
}
export default Header;
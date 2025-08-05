
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">VANSHITA GAWANDE</h1>
      <ul className="nav-links">
        <li>
          <Link to="#home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="#about" smooth={true} duration={500}>About</Link>
        </li>
        {/* <li>
          <Link to="#projects" smooth={true} duration={500}>Projects</Link>
        </li> */}
        <li>
          <Link to="#skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="#contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

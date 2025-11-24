import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h1>
        MUHAMMED JABIR M T<span style={{ color: "#fff" }}>.dev</span>
      </h1>

      {/* Hamburger Menu */}
      <div 
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

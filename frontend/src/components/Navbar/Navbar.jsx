import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <div className="logo">
                SpeedTester
            </div>

            <div className={menuOpen ? "nav-links active" : "nav-links"}>

                <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>

                <Link to="/history" onClick={() => setMenuOpen(false)}>
                    History
                </Link>

                <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About
                </Link>

            </div>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

        </nav>

    );

}

export default Navbar;
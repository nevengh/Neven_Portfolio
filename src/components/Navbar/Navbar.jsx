import { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);  // Close the menu when a link is clicked
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Neven Ghasoun</h1>
      </div>
      <div className={`home_nav ${menuVisible ? 'active' : ''}`}>
        <NavLink to='/' exact activeClassName="active" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to='/about' activeClassName="active" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to='/resume' activeClassName="active" onClick={handleLinkClick}>
          Resume
        </NavLink>
        <NavLink to='/services' activeClassName="active" onClick={handleLinkClick}>
          Services
        </NavLink>
        <NavLink to='/portfolio' activeClassName="active" onClick={handleLinkClick}>
          Portfolio
        </NavLink>
        <NavLink to='/contact' activeClassName="active" onClick={handleLinkClick}>
          Contact
        </NavLink>
      </div>
      <div className="burgermenu" onClick={toggleMenu}>
        {menuVisible ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;

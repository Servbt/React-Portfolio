import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles.css';
import '../resets.css';

function NavTabs() {
  return (
    <ul className="nav cust-nav p-4 container">
      <li className="nav-item arian-link row px-4">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Arian Rezvani
        </Link>
      </li>

      <li className="nav-item portfolio-link px-4 row">
        <Link to="Portfolio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Portfolio
        </Link>
      </li>

      <li className="nav-item px-4 row">
        <Link to="About" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          About
        </Link>
      </li>

      <li className="nav-item px-4 row">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

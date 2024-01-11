import React from 'react';
import '../styles.css';
import '../resets.css';

function NavTabs() {
  return (
    <ul className="nav cust-nav p-4 container">
      <li className="nav-item arian-link row px-4">
        <a href="#home" className="nav-link">Arian Rezvani</a>
      </li>

      <li className="nav-item portfolio-link px-4 row">
        <a href="#Portfolio" className="nav-link">Portfolio</a>
      </li>

      <li className="nav-item px-4 row">
        <a href="#About" className="nav-link">About</a>
      </li>

      <li className="nav-item px-4 row">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

export default NavTabs;

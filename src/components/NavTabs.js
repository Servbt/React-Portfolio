import React from 'react';
import '../styles.css';
import '../resets.css';

function NavTabs() {
  return (
    <ul className="nav cust-nav p-4">
      <li className="nav-item hvr-sink arian-link">
        <a href="#home" className="nav-link">Arian Rezvani</a>
      </li>

      <li className="nav-item hvr-sink portfolio-link">
        <a href="#Portfolio" className="nav-link">Portfolio</a>
      </li>

      <li className="nav-item hvr-sink">
        <a href="#About" className="nav-link">About</a>
      </li>

      <li className="nav-item hvr-sink">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

export default NavTabs;

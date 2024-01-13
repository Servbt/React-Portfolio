import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles.css';
import '../resets.css';

function NavTabs() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 600; // Adjust this value based on when you want the style to change
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul className='nav cust-nav p-4 container'>
      <div className={scrolled ? 'scrolled-2 navbar rounded-5': 'navbar'}>
      <li className={scrolled ? "scrolled arian-link row px-4 ":"nav-item arian-link row px-4 "}>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Arian Rezvani
        </Link>
      </li>

      <li className={scrolled ? "scrolled  arian-link row px-4 ":"nav-item arian-link row px-4 "}>
        <Link to="Portfolio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Portfolio
        </Link>
      </li>

      <li className={scrolled ? "scrolled  arian-link row px-4 ":"nav-item arian-link row px-4 "}>
        <Link to="About" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          About
        </Link>
      </li>

      <li className={scrolled ? "scrolled arian-link row px-4 ":"nav-item arian-link row px-4 "}>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
          Contact
        </Link>
      </li>

      </div>
    </ul>
  );
}

export default NavTabs;

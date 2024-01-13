import React from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import BottomBar from './BottomBar';

export default function PortfolioContainer() {

  return (
    <div className='master-div'>
      <div className='nav-bar master-nav'>
      <NavTabs />
      </div>
      <div className='main-content'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      </div>
    <div className='bottom-content'>
      <BottomBar/>
    </div>
    </div>
  );
}

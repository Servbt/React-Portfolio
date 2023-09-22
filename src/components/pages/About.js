import React from 'react';
import tron from '../../Images/ServBotTronBonne.png'
// import bubble from '../../Images/Icons/bg-02-free-img.png'



export default function About() {
  
  
  return (

    <div className='main-content-2'>
      <div className='position-absolute top-50 start-0 translate-middle-y w-75 ps-3 ms-5'>
        <h1 className='under-me-header pb-3'>About Me,</h1>
        <h2 className='under-me-header'>I play videogames and listen to music,</h2>
        <h5 className='under-me-header'>Making websites and looking at code is part of what I do too</h5>
        <p className='web-devHead'> I'm looking forward to working with people to make all sorts of things! </p>
      </div>


      <div className='d-flex justify-content-center ms-5 ps-5 pt-5 '>
        {/* <img className='profile-pic' src={tron} alt='profile pic'></img> */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={tron} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={tron} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={tron} className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

    </div>

  );
}




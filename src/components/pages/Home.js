import React from 'react';
// import tron from '../../Images/ServBotTronBonne.png'
// import bubble from '../../Images/Icons/bg-02-free-img.png'


export default function Home() {
  return (
    <div>
      {/* <div className='d-flex justify-content-center ms-5 ps-5 pt-5 profile-pic'>
        <img src={tron} alt='profile pic'></img>
      </div> */}
      {/* <div className='position-absolute top-0 end-0'>
        <img src={bubble} alt='bubble background'></img>
      </div> */}
      <div className='position-absolute top-50 start-50 translate-middle p-5 '>
        <h4 className='ps-4 fs-5 hello-header'>Hello! my name is</h4>
        <div className='border-bottom border-1 border-dark custom-border'></div>
        <h1 className='ps-4 mt-4 my-name'>Arian Rezvani</h1>
        <h5 className='ps-4 fs-6 web-devHead'>Web Developer</h5>
        <ul className='p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mailbox2 d-inline pe-1 pb- ps-0" viewBox="0 0 16 16">
            <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
            <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
          </svg>
          <li className='d-inline mail-header'>arianrezvani00@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

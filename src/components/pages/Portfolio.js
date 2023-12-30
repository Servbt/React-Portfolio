import React from 'react';
import movie from '../../Images/movieMix.png'
import nexus from '../../Images/nexus.png'
// import Yumu from '../../Images/Yumu.png'
import Yumu2 from '../../Images/Yumu2.png'
import todo from '../../Images/Todoblog.png'
import musicSaver from '../../Images/musicSaver.png'
import passGen from '../../Images/passwordGen.png'

export default function Portfolio() {



  return (
    <div className='main-content'>

      <div>
        <h1 className='text-center p-4 what-I-know'>What I Know</h1>
        <div className='d-flex justify-content-center border-bottom border-3 border-dark custom-border-2'></div>

        <ul className='container pt-3 '>
          <div className='row d-flex'>

            <div className='card bg-transparent border-0 col ' style={{ width: '18rem' }}>
              <div className='card-body text-center hvr-float'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-git' viewBox='0 0 16 16'>
                  <path d='M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457' />
                </svg>
                <p className='card-text pt-3 know-list'>Git Bash</p>
              </div>
            </div>

            <div className='card bg-transparent border-0 col hvr-float' style={{ width: '18rem' }}>
              <div className='card-body text-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-hexagon-half' viewBox='0 0 16 16'>
                  <path d='M14 4.577v6.846L8 15V1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z' />
                </svg>
                <p className='card-text pt-3 know-list'>Node.js</p>
              </div>
            </div>

            <div className='card bg-transparent border-0 col hvr-float' style={{ width: '18rem' }}>
              <div className='card-body text-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-database' viewBox='0 0 16 16'>
                  <path d='M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z' />
                </svg>
                <p className='card-text pt-3 know-list'>MongoDB</p>
              </div>
            </div>
          </div>
        </ul>
        <ul className='container pt-3'>
          <div className='row d-flex'>

            <div className='card bg-transparent border-0 col hvr-float' style={{ width: '18rem' }}>
              <div className='card-body text-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-bootstrap' viewBox='0 0 16 16'>
                  <path d='M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z' />
                  <path d='M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z' />
                </svg>
                <p className='card-text pt-3 know-list text-resize'>Bootstrap</p>
              </div>
            </div>

            <div className='card bg-transparent border-0 col hvr-float' style={{ width: '18rem' }}>
              <div className='card-body text-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-window-split' viewBox='0 0 16 16'>
                  <path d='M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' />
                  <path d='M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z' />
                </svg>
                <p className='card-text pt-3 know-list'>React</p>
              </div>
            </div>

            <div className='card bg-transparent border-0 col hvr-float' style={{ width: '18rem' }}>
              <div className='card-body text-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' className='bi bi-database-fill' viewBox='0 0 16 16'>
                  <path d='M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z' />
                  <path d='M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
                  <path d='M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
                  <path d='M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
                </svg>
                <p className='card-text pt-3 know-list text-resize'>SQL/<br></br>NoSQL</p>
              </div>
            </div>
          </div>
        </ul>
      </div>


    {/* projects section */}
      <div>
        <div className='d-flex justify-content-center border-bottom border-3 border-dark custom-border-2'></div>
        <h1 className='text-center p-4 what-I-know mt-4 '>Projects</h1>

        <div className='container pt-4'>
          <ul className='row'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={movie} className=' project-pic project-pic-border' alt='movieMix'></img>
            </div>
            <div className='col align-self-top'>
              <a href='https://servbt.github.io/Mix-up-Movie-Night/' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2'>Movie Mix night</a>
              <p className='project-description project-border pt-1'> Mix and Match a variety of drinks and movies for a fun night of drinking!</p>
            </div>
          </ul>

          <ul className='row'>
            <div className='col align-self-top'>
              <a href='https://still-sea-39292.herokuapp.com/' target='_empty' className='d-flex justify-content-end text-end border-2 border-bottom border-dark project-border-2 project-name fs-2'>Nexus</a>
              <p className='text-end project-description project-border-2 pt-1'> Make an account and make your own wishlist of games, you can also create and see other user reviews!</p>
            </div>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={nexus} className='project-pic project-pic-border' alt='Nexus'></img>
            </div>
          </ul>
          <ul className='row'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={musicSaver} className=' project-pic project-pic-border' alt='movieMix'></img>
            </div>
            <div className='col align-self-top'>
            <a href='https://music-saver-3b51d79cbfa1.herokuapp.com/' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2'>Music Saver</a>
              <p className='project-description project-border pt-1'>Look for any Youtube video and save a list of any that you'd like!</p>
            </div>
          </ul>

          <ul className='row'>
            <div className='col align-self-top'>
            <a href='https://ejs-todolist-529924016ab2.herokuapp.com/' target='_empty' className='d-flex justify-content-end text-end border-2 border-bottom border-dark project-border-2 project-name fs-2'>Todoblog</a>
              <p className='text-end project-description project-border-2 pt-1'> Create and edit your own todo/blog posts! </p>
            </div>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={todo} className='project-pic project-pic-border' alt='todo'></img>
            </div>
          </ul>

          <ul className='row'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={Yumu2} className='project-pic project-pic-border' alt='Yumu'></img>
            </div>
            <div className='col align-self-top'>
            <a href='https://github.com/Servbt/Yumu' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2'>Yumu (WIP)</a>
              <p className='project-description project-border pt-1'> Ambitious personal project that I'm working on. Made for the purpose of mass video preservation. </p>
            </div>
          </ul>


          
          <ul className='row'>
            <div className='col align-self-top'>
            <a href='https://servbt.github.io/Password-Generator/' target='_empty' className='d-flex justify-content-end text-end border-2 border-bottom border-dark project-border-2 project-name fs-2'>Password Generator</a>
              <p className='text-end project-description project-border-2'>A simple little app that just makes a random password if you need one.</p>
            </div>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={passGen} className='project-pic project-pic-border' alt='Nexus'></img>
            </div>
          </ul>




          {/* <div className='card bg-transparent border-0 col' style={{ width: '18rem' }}>
              <img src={nexus} className='card-img-top' alt='movieMix'></img>
            </div>
            <div className='card bg-transparent border-0 col' style={{ width: '18rem' }}>
              <img src={Yumu2} className='card-img-top' alt='movieMix'></img>
            </div> */}

        </div>


      </div>
    </div>
  );
}

import React from 'react';
import movie from '../../Images/movieMix.png'
import nexus from '../../Images/nexus.png'
// import Yumu from '../../Images/Yumu.png'
import Yumu2 from '../../Images/Yumu2.png'
import todo from '../../Images/Todoblog.png'
import musicSaver from '../../Images/musicSaver.png'
// import passGen from '../../Images/passwordGen.png'

export default function Portfolio() {

  return (

    <div className='main-content portfolio-body'>
        <div className='d-flex'></div>
      {/* projects section */}
      <div>

        <h1 id='Portfolio' className='text-center project-header segoi'>Projects</h1>

        <div className='container pt-4 '>
          <ul className='row my-3'>
            <div className='col mb-5'>
              <a href='https://servbt.github.io/Mix-up-Movie-Night/' target='_empty' className=' project-name fs-1 '>
                <img src={movie} className=' project-pic hvr-grow rounded' alt='movieMix'></img>
              </a>
            </div>
            <div className='col align-self-top text-center pt-2'>
              <a href='https://servbt.github.io/Mix-up-Movie-Night/' target='_empty' className=' project-name fs-1 '>Movie Mix night</a>
              <p className='project-description pt-1 rounded-2 p-3'> Mix and Match a variety of drinks and movies for a fun night of drinking!</p>
            </div>
          </ul>

          <ul className='row my-3'>
            <div className='col align-self-top text-center me-4'>
              <a href='https://still-sea-39292.herokuapp.com/' target='_empty' className=' project-name fs-1'>Nexus</a>
              <p className=' project-description pt-1 rounded-2 p-3'> Make an account and make your own wishlist of games, you can also create and see other user reviews!</p>
            </div>
            <div className='col mb-5'>
              <a href='https://still-sea-39292.herokuapp.com/' target='_empty' className=' project-name fs-1'>
                <img src={nexus} className='project-pic hvr-grow rounded' alt='Nexus'></img>
              </a>
            </div>
          </ul>
          <ul className='row my-3'>
            <div className='col mb-5'>
              <a href='https://music-saver-3b51d79cbfa1.herokuapp.com/' target='_empty' className='project-name fs-1'>
                <img src={musicSaver} className=' project-pic hvr-grow rounded' alt='music-saver'></img>
              </a>
            </div>
            <div className='col align-self-top text-center'>
              <a href='https://music-saver-3b51d79cbfa1.herokuapp.com/' target='_empty' className='project-name fs-1'>Music Saver</a>
              <p className='project-description pt-1 rounded-2 p-3'>Look for any Youtube video using Google's API. Then save a list of any videos that you'd like on local storage! Made with axios and EJS.</p>
            </div>
          </ul>

          <ul className='row my-3'>
            <div className='col align-self-top text-center me-4'>
              <a href='https://ejs-todolist-529924016ab2.herokuapp.com/' target='_empty' className='project-name fs-1'>Todoblog</a>
              <p className=' project-description pt-1 rounded-2 p-3'> Create and edit your own todo/blog posts! Also Made server side with express. </p>
            </div>
            <div className='col mb-5'>
            <a href='https://ejs-todolist-529924016ab2.herokuapp.com/' target='_empty' className='project-name fs-1'>
              <img src={todo} className='project-pic hvr-grow rounded' alt='todo'></img>
            </a>
            </div>
          </ul>

          <ul className='row my-3'>
            <div className='col mb-5'>
            <a href='https://github.com/Servbt/Yumu' target='_empty' className='project-name fs-1'>
              <img src={Yumu2} className='project-pic hvr-grow rounded' alt='Yumu'></img>
            </a>
            </div>
            <div className='col align-self-top text-center'>
              <a href='https://github.com/Servbt/Yumu' target='_empty' className='project-name fs-1'>Yumu (WIP)</a>
              <p className='project-description pt-1 rounded-2 p-3'> Ambitious personal project that I'm working on. Made for the purpose of mass video preservation. Just a Landing page for now! </p>
            </div>
          </ul>

          {/* <ul className='row my-3'>
            <div className='col align-self-top'>
            <a href='https://servbt.github.io/Password-Generator/' target='_empty' className='text-center-2 project-name fs-1'>Password Generator</a>
              <p className=' project-description-2'>A simple little app that just makes a random password if you need one.</p>
            </div>
            <div className='col mb-5'>
              <img src={passGen} className='project-pic rounded' alt='Nexus'></img>
            </div>
          </ul> */}

        </div>
        <div className='d-flex'></div>
      </div>
    </div>
  );
}

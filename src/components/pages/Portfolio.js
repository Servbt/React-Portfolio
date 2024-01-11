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
    {/* projects section */}
      <div>
        <div className='d-flex justify-content-center border-bottom border-3 border-dark custom-border-2'></div>
        <h1 className='text-center p-4 what-I-know mt-4 '>Projects</h1>

        <div className='container pt-4 '>
          <ul className='row hvr-forward my-3'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={movie} className=' project-pic project-pic-border' alt='movieMix'></img>
            </div>
            <div className='col align-self-top'>
              <a href='https://servbt.github.io/Mix-up-Movie-Night/' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2 '>Movie Mix night</a>
              <p className='project-description project-border pt-1'> Mix and Match a variety of drinks and movies for a fun night of drinking!</p>
            </div>
          </ul>

          <ul className='row hvr-backward my-3'>
            <div className='col align-self-top'>
              <a href='https://still-sea-39292.herokuapp.com/' target='_empty' className='d-flex justify-content-end text-end border-2 border-bottom border-dark project-border-2 project-name fs-2'>Nexus</a>
              <p className='text-end project-description project-border-2 pt-1'> Make an account and make your own wishlist of games, you can also create and see other user reviews!</p>
            </div>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={nexus} className='project-pic project-pic-border' alt='Nexus'></img>
            </div>
          </ul>
          <ul className='row hvr-forward my-3'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={musicSaver} className=' project-pic project-pic-border' alt='movieMix'></img>
            </div>
            <div className='col align-self-top'>
            <a href='https://music-saver-3b51d79cbfa1.herokuapp.com/' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2'>Music Saver</a>
              <p className='project-description project-border pt-1'>Look for any Youtube video and save a list of any that you'd like!</p>
            </div>
          </ul>

          <ul className='row hvr-backward my-3'>
            <div className='col align-self-top'>
            <a href='https://ejs-todolist-529924016ab2.herokuapp.com/' target='_empty' className='d-flex justify-content-end text-end border-2 border-bottom border-dark project-border-2 project-name fs-2'>Todoblog</a>
              <p className='text-end project-description project-border-2 pt-1'> Create and edit your own todo/blog posts! </p>
            </div>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={todo} className='project-pic project-pic-border' alt='todo'></img>
            </div>
          </ul>

          <ul className='row hvr-forward my-3'>
            <div className='card bg-transparent border-0 col mb-5' style={{ width: '16rem' }}>
              <img src={Yumu2} className='project-pic project-pic-border' alt='Yumu'></img>
            </div>
            <div className='col align-self-top'>
            <a href='https://github.com/Servbt/Yumu' target='_empty' className='text-begin border-2 border-bottom border-dark project-border project-name fs-2'>Yumu (WIP)</a>
              <p className='project-description project-border pt-1'> Ambitious personal project that I'm working on. Made for the purpose of mass video preservation. </p>
            </div>
          </ul>


          
          <ul className='row hvr-backward my-3'>
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

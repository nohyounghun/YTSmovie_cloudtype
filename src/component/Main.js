import React from 'react';
import {Link} from 'react-router-dom';

function Main(props) {
  return (
    <>
      <main>
        <div className='main_con_wrap1 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/vinnie-isms-the-story-of-the-cop-comedian-2025'><img src={`${process.env.PUBLIC_URL}/images/movie1.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>Vinnie-isms: The Story of the Cop Comedian</p>
              <span className='year'>2025</span>
              <span className='genre'>Documentary</span>
              <span className='explain'>-</span>
            </div>
          </div>
        </div>

        <div className='main_con_wrap2 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/yanni-live-the-concert-event-2006'><img src={`${process.env.PUBLIC_URL}/images/movie2.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>Yanni Live! The Concert Event</p>
              <span className='year'>2006</span>
              <span className='genre'>Music</span>
              <span className='explain'>-</span>
            </div>
          </div>
        </div>

        <div className='main_con_wrap3 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/mobking-2023'><img src={`${process.env.PUBLIC_URL}/images/movie3.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>MobKing</p>
              <span className='year'>2023</span>
              <span className='genre'>Action Drama Thriller</span>
              <span className='explain'>Coming off a lengthy prison sentence, Mike White is coming home to a world changed drastically by technology and a mindset of just trying to live a normal life running his Gentlemen's club and taking care of his family.</span>
            </div>
          </div>
        </div>

        <div className='main_con_wrap4 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/a-minecraft-movie-2025'><img src={`${process.env.PUBLIC_URL}/images/movie4.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>A Minecraft Movie</p>
              <span className='year'>2025</span>
              <span className='genre'>Action Adventure Comedy Family Fantasy</span>
              <span className='explain'>Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld:</span>
            </div>
          </div>
        </div>

        <div className='main_con_wrap5 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/nonnas-2025'><img src={`${process.env.PUBLIC_URL}/images/movie5.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>Nonnas</p>
              <span className='year'>2025</span>
              <span className='genre'>Comedy</span>
              <span className='explain'>After losing his beloved mother, a man risks everything to honor her by opening an Italian restaurant with actual nonnas — grandmothers — as the chefs.</span>
            </div>
          </div>
        </div>

        <div className='main_con_wrap6 main_con_wrap'>
          <div className='main_con'>
            <Link to='https://yts.mx/movies/the-ugly-stepsister-2025'><img src={`${process.env.PUBLIC_URL}/images/movie6.jpg`} alt="" /></Link>
            <div className='movie_text'>
              <p className='movie_title'>The Ugly Stepsister</p>
              <span className='year'>2025</span>
              <span className='genre'>Comedy Drama Horror</span>
              <span className='explain'>In a fairy-tale kingdom where beauty is a brutal business, Elvira battles to compete with her incredibly beautiful stepsister, and she will go to any length to catch the prince’s eye.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
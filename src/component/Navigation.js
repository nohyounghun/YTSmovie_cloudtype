import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Navigation(props) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/YTSmovie'>Home</Link></li>
          <li><Link to='/intro'>Intro</Link></li>
          <li><Link to='/API'>API</Link></li>
          <li><Link to='/Contact'>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
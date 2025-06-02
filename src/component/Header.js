import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import '../App.css';

function Header(props) {
  return (
    <>
      <header>
        <h1>
          <Link to='/YTSmovie'>
            <img src={`${process.env.PUBLIC_URL}/images/logo-YTS.svg`} alt="YTS로고" />
          </Link>
          <Navigation />
        </h1>
      </header>
    </>
  );
}

export default Header;
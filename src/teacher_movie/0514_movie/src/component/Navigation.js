import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="navi">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/intro'>Intro</Link></li>
        <li><Link to='/sub1'>Sub1</Link></li>
        <li><Link to='/sub2'>Sub2</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Intro from './sub/Intro';
import Sub1 from './sub/Sub1';
import Sub2 from './sub/Sub2';
import MovieDetail from './sub/MovieDetail';
import NotFound from './sub/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/sub1' element={<Sub1 />} />
        <Route path='/sub2' element={<Sub2 />} />
        <Route path='/movie-detail' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

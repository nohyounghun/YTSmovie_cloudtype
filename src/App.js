import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
/* import Main from './component/Main'; */
import Main2 from './component/Main2';
import Footer from './component/Footer';
import Intro from './sub/Intro';
import Api from './sub/Api';
import Contact from './sub/Contact';
import NotFound from './sub/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/YTSmovie" element={<Main2 />} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/intro" element={<Intro />} />
        <Route path="/api" element={<Api />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
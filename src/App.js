

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import LoginPage from './components/login/login';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

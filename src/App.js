

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
import LoginPage from './components/login/login';
=======
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 03585e0476f4235e2333e4f77e7fe1d66b599f4f

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        
        <Route path="/" element={
            <>
              <Navbar />
              <Shop/>
            </>
          }
        />

      </Routes>
    </Router>
=======
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 03585e0476f4235e2333e4f77e7fe1d66b599f4f
  );
};

export default App;

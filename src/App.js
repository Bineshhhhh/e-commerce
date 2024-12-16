

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import LoginPage from './components/login/login';

const App = () => {
  return (
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
  );
};

export default App;

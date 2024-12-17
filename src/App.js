import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import LoginPage from './components/login/login';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
      <Route exact path="/home" element={<><Navbar/><Shop/><Footer/></>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

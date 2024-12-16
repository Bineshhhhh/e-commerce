import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

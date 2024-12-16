import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/login/login';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Shop />
    //   <Footer/>
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

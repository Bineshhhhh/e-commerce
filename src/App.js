import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/login/login';
import ShopCategory from './pages/ShopCategory';
import men_banner from './components/assets/Banners_all.jpeg'
import women_banner from './components/assets/Banners_all.jpeg'
import kid_banner from './components/assets/Banners_all.jpeg'
import Product from './pages/Product';
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div>
    {/* <div className="App">
      <Navbar />
      <Shop />
      <Footer/> */}
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/" element={<><Navbar/><Shop/><Footer/></>}/>
            <Route exact path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
            <Route exact path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
            <Route exact path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
            <Route exact path="/product" element={<Product/>}>
              <Route exact path=":productId" element={<Product/>}/>
            </Route>  
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
    
  );
}

export default App;

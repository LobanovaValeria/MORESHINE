import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header/Header';
import Cover from './components/cover/Cover';
import AboutBrand from './components/sections/AboutBrand';
import Catalog from './components/sections/Catalog';
import Order from './components/sections/Order';
import Footer from './components/footer/Footer.jsx';
import AboutMaterials from './components/sections/AboutMaterials.jsx';
import Reviews from './components/sections/Reviews.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Cover/>
      <div className='wrapperSections'>
        <AboutBrand/>
        <Catalog/>
        <AboutMaterials/>
        <Reviews/>
        <Order/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

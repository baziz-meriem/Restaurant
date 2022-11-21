import './App.css';
import Hero from "./components/Hero";
import Products from './components/Products';
import Footer from './components/Footer';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";
import {productData} from "./components/Products/data"
import SpecialMenu from './components/SpecialMenu/SpecialMenu';
import cocktails from "./components/SpecialMenu/data";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <SpecialMenu data={cocktails}/>
      <Products heading='Choose your favorite type of pizza' data={productData}/>
      <Footer/>
    </Router>
     
    
  );
}

export default App;

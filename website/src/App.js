import './App.css';
import Hero from "./components/Hero";
import Products from './components/Products';
import Footer from './components/Footer';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";
import {productData} from "./components/Products/data"

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite type of pizza' data={productData}/>
      <Footer/>
    </Router>
     
    
  );
}

export default App;

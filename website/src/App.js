import './App.css';
import Hero from "./components/Hero";
import Products from './components/Products';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";
import {productData} from "./components/Products/data"
import SpecialMenu from './components/SpecialMenu/SpecialMenu';
import cocktails from "./components/SpecialMenu/data";
import Gallery from './components/Gallery/Gallery';
import Counter from './components/Counter/Counter';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Counter/>
      <SpecialMenu data={cocktails}/>
      <Products heading='Choose your favorite type of pizza' data={productData}/>
      <Gallery/>
      <Footer/>
    </Router>
     
    
  );
}

export default App;

import './App.css';
import Hero from "./components/Hero";
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";
import Menu from "./components/Menu/Menu"
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
      <Menu/>
      <Gallery/>
      <Footer/>
    </Router>
     
    
  );
}

export default App;


import Hero from "./components/Hero";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
    </Router>
     
    
  );
}

export default App;

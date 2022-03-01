import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Section1 from './page/about-us/AboutUs';
import Home from './page/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TermsConditions from './page/term-conditions/TermsConditions';
import Faq from './page/faq/Faq';
import AboutUs from './page/about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/about" element={<Section1 />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/terms-conditions" element={<TermsConditions />}>
          </Route>
          <Route path="/faq" element={<Faq />}>
          </Route>
          <Route path="/aboutus" element={<AboutUs />}>
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

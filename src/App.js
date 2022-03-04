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
import GameFi from './page/gamefi/GameFi';
import LearnToEarn from './page/learn-to-earn/LearnToEarn';
import DeFiGovernance from './page/defi-governances/DeFiGovernance';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/terms-conditions" element={<TermsConditions />}>
          </Route>
          <Route path="/faq" element={<Faq />}>
          </Route>
          <Route path="/about-us" element={<AboutUs />}>
          </Route>
          <Route path="/gamefi" element={<GameFi />}>
          </Route>
          <Route path="/learntoearn" element={<LearnToEarn />}>
          </Route>
          <Route path="/defigovernance" element={<DeFiGovernance />}>
          </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

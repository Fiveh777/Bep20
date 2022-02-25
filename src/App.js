import './App.css';
import Header from './components/header/Header';
import Introduce from './components/introduce-section/Introduce';
import Tools from './components/tools/Tools';
import Feature from './components/feature/Feature';
import Benefit from './components/benefit/Benefit';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Introduce/>
      <Tools/>
      <Feature/>
      <Benefit/>
      <Footer/>
    </div>
  );
}

export default App;

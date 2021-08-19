// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Nav from './Components/Nav';
import Callout from './Components/Callout';
// import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Callout/>
      {/* <Portfolio/> */}
      {/* <h1>hello</h1> */}
      <Footer/>
    </div>
  );
}

export default App;

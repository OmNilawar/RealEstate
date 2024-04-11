
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Header from './components/Header';
import Home from './components/Home';
import Company from './components/Company';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';

// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {

  return (
    <>
    <div className='w-full flex flex-col gap-5'>
      <div>
        <Header />
        <Home />
      </div>
      <Company />
      <Projects />
      <Values />
      <Contact />
      <Subscribe />
    </div>
    </>
  );
}

export default App;

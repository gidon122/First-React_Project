import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return <div className="App">
      <Home/>
      <About/>
      <Works/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>;
}

export default App;

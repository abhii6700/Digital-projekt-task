import './App.css';
import Header from './section/header/header'
import Hero from './section/hero section/hero-section'
import About from './section/about/about'
import Skills from './section/skills/skills';
import {Route, Switch} from 'react-router-dom'
import Projects from './projects/projects';
import Testimonial from './section/testimonial/testimonial';
import GetInTouch from './section/get in touch/get-in-touch';
import Footer from './section/footer/footer';


function App() {
  return (
    <div className="App">
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <Testimonial/> */}
    <GetInTouch/>
    <Footer/>
    </div>
  );
}

export default App;

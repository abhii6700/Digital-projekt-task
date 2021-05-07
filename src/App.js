import './App.css';

import Hero from './section/hero section/hero-section'
import About from './section/about/about'
import Skills from './section/skills/skills';
import Projects from './projects/projects';
import GetInTouch from './section/get in touch/get-in-touch';
import Footer from './section/footer/footer';


function App() {
  return (
    <div className="App">
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <GetInTouch/>
    <Footer/>
    </div>
  );
}

export default App;

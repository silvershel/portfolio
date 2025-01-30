import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='ui center aligned basic segment'>
      <Nav />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <About />
    </div>
  );
}

export default App;

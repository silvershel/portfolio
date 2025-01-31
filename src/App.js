import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div>
        
        <About />
        <Nav />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Nav />
      </div>
    </AppProvider>
  );
}

export default App;

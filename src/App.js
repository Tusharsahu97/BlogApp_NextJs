import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skill from './components/skills/Skill';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

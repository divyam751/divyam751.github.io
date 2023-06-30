import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Skills } from "./Components/Skills";
import { Github } from "./Components/Github";

function App() {
  let [boolean, setBoolean] = useState(true);
  function handleClick() {
    setBoolean(!boolean);
  }

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='App'>
      <Navbar handleClick={handleClick} boolean={boolean} />
      <Intro handleClick={handleClick} boolean={boolean} />
      <div
        className='contain give-padding'
        onClick={() => {
          if (boolean === false) handleClick();
        }}
      >
        <About />
        <Skills />
        {/* <Work /> */}
        <Projects />
        <Github />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

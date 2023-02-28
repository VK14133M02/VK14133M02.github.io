import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Github from "./Pages/Github";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

import Skills from "./Pages/Skills";
import Tools from "./Pages/Tools";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Tools />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

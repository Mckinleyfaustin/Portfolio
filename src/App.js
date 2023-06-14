import Skills from "./components/skills";
import About from "./components/About";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { Contact } from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

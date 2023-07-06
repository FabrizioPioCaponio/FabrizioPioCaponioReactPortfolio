import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialiLinks from "./components/SocialiLinks";
import SpacerVh from "./components/utils/SpacerVh";

function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <SpacerVh/>
    <div className="bg3">
    <About/>
    <Portfolio/>
    <Skills/>
    
    <Contact/>
    </div>

    <SocialiLinks/>
    
   </div>
  );
}

export default App;

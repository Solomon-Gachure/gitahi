import About from "./component/about";
import Navbar from "./component/navbar";
import Projects from "./component/projects";
import Skills from "./component/skills";

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;

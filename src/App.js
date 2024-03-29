import About from "./component/about";
import Contact from "./component/contact";
import Navbar from "./component/navbar";
import Projects from "./component/projects";
import Skills from "./component/skills";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="dark:bg-stone-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;

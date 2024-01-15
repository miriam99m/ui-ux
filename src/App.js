import About from "./Component/About";
import Education from "./Component/Education";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Tools from "./Component/Tools";
import WorkTogether from "./Component/WorkTogether";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <WorkTogether />
      <Tools />
      <Education />
      <Footer />
    </>
  );
}

export default App;

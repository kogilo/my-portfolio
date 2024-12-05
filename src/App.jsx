import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import ProjectsCard from "./components/ProjectsCard";
import SectionTitle from "./components/SectionTitle";
import Skills from "./components/Skills";
import SkillsCard from "./components/SkillsCard";

const App = () => {
  return <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <SkillsCard/>
    <SectionTitle/>
    <About/>
    <Projects/>
    {/* <ProjectsCard/> */}
  </>
};

export default App;

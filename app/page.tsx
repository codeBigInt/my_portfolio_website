import About from "./components/About";
import Achievements from "./components/Achievements";
import Activity from "./components/Activity";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Videos from "./components/Videos";
import Writing from "./components/Writing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Videos />
        <Writing />
        <Skills />
        <Projects />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

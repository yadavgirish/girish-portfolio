import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects"
import Services from "../sections/Services/Services";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
import { StickyNavbar } from "./components/navbar";
import Hero from "./components/home";
import About from "./about/about";
import Skills from "./skills/skills";
import Project from "./projects/project";
import Contact from "./contact/contact";
import Footer from "./components/footer";



export default function Home() {
  return (
    <>
    <div>
      <StickyNavbar></StickyNavbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>

    </> 
  );
}

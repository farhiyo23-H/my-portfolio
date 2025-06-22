import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar"
import Skill from "./components/skills/Skill";
import Works from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {


  return (
    <div id="main-content" className="App">
      <Navbar />
      <Intro />
      <button
        onClick={() =>
          document
            .getElementById("skills")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Scroll to Skills
      </button>

      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App

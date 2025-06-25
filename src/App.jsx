import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Skill from "./components/skills/Skill";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div id="main-content" className="App">
        <Navbar />
        <Intro />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

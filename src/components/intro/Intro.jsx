
import "./intro.css"
import { Link } from "react-scroll";
// import btnImg from "../../../assets/hire.png";
// import img from "../../../assets/img.jpg"// Assuming you have a button image


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          i'm <span className="introName">Abdullahi</span>
          <br />
          Software Developer
        </span>

        <p className="introPara">
          I'm a Skilled software developer specializing in modern web and mobile
          technologies. I build fast, scalable apps with clean code and
          intuitive UX. Passionate about solving problems with efficient,
          maintainable solutions
        </p>
        <Link
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button className="btn"> Hire me </button>
        </Link>
      </div>
      {/* <img src={img} alt="Profile" className="bg" /> */}
    </section>
  );
}

export default Intro
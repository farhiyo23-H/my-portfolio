import "./contact.css";
import Facebook_Logo from "../../assets/Facebook_Logo.png";
import Microsoft_Logo from "../../assets/Microsoft_Logo.png";
import Twit_logo from "../../assets/Twit_logo.png";
import Adobe_logo from "../../assets/Adobe_logo.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instgram from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="client">
        <h1 className="contactPageTitle">Clients</h1>
        <p className="clientDesc">
          I’ve collaborated with a variety of clients to deliver user-friendly,
          high-performance web applications tailored to their needs. Each
          project reflects a commitment to quality, communication, and long-term
          value.
        </p>
        <div className="clientImg">
          <img src={Facebook_Logo} alt="Facebook Logo" className="clientLogo" />
          <img
            src={Microsoft_Logo}
            alt="Microsoft Logo"
            className="clientLogo"
          />
          <img src={Twit_logo} alt="Twitter Logo" className="clientLogo" />
          <img src={Adobe_logo} alt="Adobe Logo" className="clientLogo" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to get in touch with me.
        </span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Send
          </button>
          <div className="links">
            <img src={twitter} alt="twitter" className="twitterLogo" />
            <img src={facebook} alt="facebook" className="link" />
            <img src={youtube} alt="youtube" className="link" />
            <img src={instgram} alt="instgram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

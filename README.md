# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




<!-- 
its css navbar
.navbar {
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  height: 5rem;
  width: 100vw;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
}
.logo {
  object-fit: cover;
  width: 3rem;
  height: 4rem;
}
.deskMenuListItem {
  margin: 1rem;
  cursor: pointer;
  color: white;
}
.deskMenuListItem:hover {
  color: #646cff;
  transition: all 0.3s ease-in-out;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid #646cff;
  outline: none;
}
.deskMenuImg {
  object-fit: cover;
  height: 1rem;
  width: 1rem;
  margin: 1rem;
  border-radius: 50%;
  outline: none;
  border: none;
}
.desktopMenuBtn {
  border: none;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 2rem;
  outline: none;
}
.active {
  color: #646cff;
  border-bottom: 2px solid #646cff;
  padding-bottom: 0.2rem;
}



import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import img from "../../assets/contact.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="deskMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          containerId="main-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="deskMenuListItem"
          onClick={() => console.log("Scrolling to skills")}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="deskMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="deskMenuListItem"
        >
          Client
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* <img src="" alt="" className="deskMenuImg" /> */}
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;





work.css
 #works {
  margin: 0 auto;
   max-height: calc(100vh - 4rem); */
  width: 100vw;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 2rem 1rem;
  background-color: rgb(30, 30, 30);
  min-height: 100vh;
  position: relative;
  z-index: 1;
}  */
.worksTitle {
  margin: 1rem 0;
  font-size: 2rem;
}
.worksdesc {
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem 0 2rem;
  color: #ccc;
  max-width: 40rem;
}

.worksImgs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  /* max-width: 65rem; */
}
.workImg {
  object-fit: cover;
  height: 250px;
  width: 250px;
  border-radius: 12px;

  background-color: black;
  width: 20rem;
  margin: 1rem;
}
.workImg:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.worksButton {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 2rem;
  background-color: #646cff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.worksButton:hover {
  background-color: #5050ff;
}
@media screen and (max-width: 585px) {
  .workImg {
    width: 100%;
    height: auto;
  }
  .worksImgs {
    flex-direction: column;
    align-items: center;
  }
}




contact.css 
#contactPage{
   min-height: calc(100vh - 4rem); 
    width: 100vw;
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-top: 1rem;
    padding: 4rem 1rem;
    position: relative;
    z-index: 1;
}
#contactPage::before {
    content: "";
    display: block;
    height: 70px; /* same height as your navbar */
    margin-top: -70px; /* negative margin of navbar height */
    visibility: hidden;
  }
  
#client {
    background-color: rgb(30, 30, 30); /* Match dark theme */
    color: white;
    padding: 2rem;
    width: 100%;
    z-index: 2;
  }
.contactPageTitle {
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 3rem 0;
}

.clientDesc{
    font-size: 1rem;
    max-width: 50rem;
    font-weight: 400;
    padding: 0.5rem 0 2rem;
}
.clientImg{
    margin : 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
.clientLogo{
    object-fit: cover;
    min-width: 9rem;
    width: 23%;
    padding: 0.25rem; 
    margin: auto;


    
}
.contactDesc{
    padding: 1rem;
    font-size: medium;
    font-weight: 300;
    text-align: center;
}
.contactForm{
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 60rem;
    
}
.name,.email,.msg {
    font-size: medium;
    width: 100%;
    max-width: 40rem;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    border-radius: 0.5rem;
    background-color:rgb(50, 50, 50);
    outline: none;
}
.submitBtn{
    background-color: white;
    color: black;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
    font-size: medium;
    margin-top: 1rem;

}
.links{
    display: flex;
    flex-wrap: wrap;
}
.link{
    object-fit: cover;
    height: 2rem;
    width: 2rem;
    margin: 1rem 0.75rem;
}
 



// import React from "react";
// import "./navbar.css";
// import logo from "../../assets/logo.png";
// import img from "../../assets/contact.svg";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <img src={logo} alt="logo" className="logo" />
//       <div className="desktopMenu">
//         <Link
//           activeClass="active"
//           to="intro"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="deskMenuListItem"
//         >
//           Home
//         </Link>
//         <Link
//           activeClass="active"
//           to="skills"
//           containerId="main-content"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="deskMenuListItem"
//           onClick={() => console.log("Scrolling to skills")}
//         >
//           About
//         </Link>
//         <Link
//           activeClass="active"
//           to="works"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="deskMenuListItem"
//         >
//           Portfolio
//         </Link>
//         <Link
//           activeClass="active"
//           to="contactPage"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="deskMenuListItem"
//         >
//           Client
//         </Link>
//       </div>
//       <button
//         className="desktopMenuBtn"
//         onClick={() => {
//           document
//             .getElementById("contactPage")
//             .scrollIntoView({ behavior: "smooth" });
//         }}
//       >
//         {/* <img src="" alt="" className="deskMenuImg" /> */}
//         Contact me
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";

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
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="deskMenuListItem"
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

      <Link
        to="contactPage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className="desktopMenuBtn">
          <FiMail size={30} className="contactIcon" />
          Contact me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

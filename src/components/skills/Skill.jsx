// import React from 'react'
// import "./skill.css"
// import appDesign from "../../assets/appDesign.png";
// import webDesign from "../../assets/webDesign.png";
// import uiDesign from "../../assets/uiDesign.png";


// const Skill = () => {
//     console.log("Skill component rendered");
//   return (
//     <section id="skills">
//       <span className="skillTitle">What i do </span>
//       <span className="skillDesc">
//         I'm a Skilled software developer specializing in modern web and mobile
//         technologies. I build fast, scalable apps with clean code and intuitive
//         UX. Passionate about solving problems with efficient, maintainable
//         solutions
//           </span>
//           <div className="skillBars">
//               <div className="skillbar">
//                   <img src={uiDesign} alt="UiDesign" className='skillBarImg' />
//                   <div className="skillBarText">
//                       <h2>UI/UX Design</h2>
//                         <p>this is demo text, you can write your own content here  </p>
//                   </div>
//               </div>
//               <div className="skillbar">
//                   <img src={webDesign} alt="WebDesign" className='skillBarImg' />
//                   <div className="skillBarText">
//                       <h2>Website Design </h2>
//                         <p>this is demo text, you can write your own content here  </p>
//                   </div>
//               </div>
//               <div className="skillbar">
//                   <img src={appDesign} alt="AppDesign" className='skillBarImg' />
//                   <div className="skillBarText">
//                       <h2> App Design </h2>
//                         <p>this is demo text, you can write your own content here  </p>
//                   </div>
//               </div>
//           </div>
//     </section>
//   );
// }

// export default Skill




import React from "react";
import "./skill.css";
import appDesign from "../../assets/appDesign.png";
import webDesign from "../../assets/webDesign.png";
import uiDesign from "../../assets/uiDesign.png";

const Skill = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">What I Do</h2>
      <p className="skillDesc">
        I'm a skilled software developer specializing in modern web and mobile
        technologies. I build fast, scalable apps with clean code and intuitive
        UX. Passionate about solving problems with efficient, maintainable
        solutions.
      </p>

      <div className="skillBars">
        <div className="skillBar">
          <img src={uiDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>UI/UX Design</h3>
            <p>This is demo text. You can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={webDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Website Design</h3>
            <p>This is demo text. You can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={appDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>App Design</h3>
            <p>This is demo text. You can write your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

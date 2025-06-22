import React from 'react'
import "./skill.css"
import appDesign from "../../assets/appDesign.png";
import webDesign from "../../assets/webDesign.png";
import uiDesign from "../../assets/uiDesign.png";


const Skill = () => {
    console.log("Skill component rendered");
  return (
    <section id="skills">
      <span className="skillTitle">What i do </span>
      <span className="skillDesc">
        I'm a Skilled software developer specializing in modern web and mobile
        technologies. I build fast, scalable apps with clean code and intuitive
        UX. Passionate about solving problems with efficient, maintainable
        solutions
          </span>
          <div className="skillBars">
              <div className="skillbar">
                  <img src={uiDesign} alt="UiDesign" className='skillBarImg' />
                  <div className="skillBarText">
                      <h2>UI/UX Design</h2>
                        <p>this is demo text, you can write your own content here  </p>
                  </div>
              </div>
              <div className="skillbar">
                  <img src={webDesign} alt="WebDesign" className='skillBarImg' />
                  <div className="skillBarText">
                      <h2>Website Design </h2>
                        <p>this is demo text, you can write your own content here  </p>
                  </div>
              </div>
              <div className="skillbar">
                  <img src={appDesign} alt="AppDesign" className='skillBarImg' />
                  <div className="skillBarText">
                      <h2> App Design </h2>
                        <p>this is demo text, you can write your own content here  </p>
                  </div>
              </div>
          </div>
    </section>
  );
}

export default Skill
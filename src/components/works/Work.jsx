
// import "./work.css"
// import work1 from "../../assets/work1.jpg";
// import work2 from "../../assets/work2.jpg";
// import work3 from "../../assets/work3.jpg";
// import work4 from "../../assets/work4.jpg";
// import work5 from "../../assets/work5.jpg";
// import work6 from "../../assets/work6.jpg";

// const Work = () => {
//   return (
//       <section id='works'>
//           <h2 className="worksTitle">my portfolio</h2>
//           <span className="worksdesc">
//           A showcase of my recent projects, where I combine clean design, responsive layouts, and efficient code to build impactful digital experiences. Each project highlights my skills in front-end development and problem-solving.
//           </span>
//           <div className="worksImgs">
//               <img src={work1} alt="" className="workImg" />
//               <img src={work2} alt="" className="workImg" />
//               <img src={work3} alt="" className="workImg" />
//               <img src={work4} alt="" className="workImg" />
//               <img src={work5} alt="" className="workImg" />
//               <img src={work6} alt="" className="workImg" /> 

//           </div>
//           <button className="worksButton">View More</button>
//     </section>
//   )
// }

// export default Work

import "./work.css";
import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";
import work6 from "../../assets/work6.jpg";

const Work = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <p className="worksDesc">
        A showcase of my recent projects, where I combine clean design,
        responsive layouts, and efficient code to build impactful digital
        experiences. Each project highlights my skills in front-end development
        and problem-solving.
      </p>
      <div className="worksImgs">
        {[work1, work2, work3, work4, work5, work6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project ${index + 1}`}
            className="workImg"
          />
        ))}
      </div>
      <button className="worksButton">View More</button>
    </section>
  );
};

export default Work;

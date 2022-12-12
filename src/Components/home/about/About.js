import React from "react";
import img from "../../../Assets/images/work/projects.png"
/**
 * The about section in the landing page
 *
 * @Component
 * @returns {React.element}
 */
const About = () => {
  const data = [
    {
      title: "Who We And What We Do",
      desc1:
        "Software company that helps developers to make their own apps by providing LCNC Tool",
      desc2: "Low-code development requires users to do some level of coding.",
      desc3:
        "No-code development targets non-technical users in various business functions who understand business needs and rules but possess little or no coding experience and programming language skills. These citizen developers can use no-code to easily and quickly build, test and deploy their business apps",
      cover: img
    },
  ];
  return (
    <>
      <section className="about topMarign">
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Us</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                </div>
                <div className='right'>

                  <img src={value.cover} width="700" height={400} style={{ display: "flex", textAlign: "center" }} alt='home-page' />
              
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;

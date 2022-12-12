import React from "react";

/**
 * LOOKING FOR EXCLUSIVE SERVICES component
 *
 * @Component
 * @returns {React.element}
 */
const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES?",
      heading: "Get The Best For Your Business",
    },
  ];
  return (
    <>
      <section className="Branding wrapper">
        <div className="container">
          {data.map((value) => {
            return (
              <div className="box">
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <button className="primary-btn">
                  <a
                    href={"https://www.itworx.com/"}
                    className="text-decoration-none text-white"
                  >
                    Contact Us
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

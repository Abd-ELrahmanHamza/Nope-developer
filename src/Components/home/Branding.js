import React from "react";

/**
 * Branding Component Contains some info about the available widgets
 *
 * @Component
 * @returns {React.element}
 */
const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Widgets",
      desc: "Simple html tags with few basic styling like div, span, etc...",
    },
    {
      id: "02",
      heading: "Layout",
      desc: "Complex widgets with amazing styling like carousel, button group, etc...",
    },
    {
      id: "03",
      heading: "Page",
      desc: "A complete page with styling ready to use",
    },
  ];
  return (
    <>
      <section className="Branding">
        <div className="container grid">
          {data.map((value) => {
            return (
              <div className="box flex">
                <div className="text">
                  <h1>{value.id}</h1>
                </div>
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branding;

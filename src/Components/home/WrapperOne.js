import React from "react";

/**
 * Component contains statistics
 *
 * @Component
 * @returns {React.element}
 */
const WrapperOne = () => {
  const data = [
    {
      num: "19",
      text: "AWARDS WINNING",
    },
    {
      num: "99%",
      text: "SATISFIED CLIENTS",
    },
    {
      num: "332",
      text: "CREATIVE PROJECTS",
    },
    {
      num: "54",
      text: "Projects",
    },
  ];
  return (
    <>
      <section className="Branding wrapperOne">
        <div className="container grid1">
          {data.map((value) => {
            return (
              <div className="box">
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WrapperOne;

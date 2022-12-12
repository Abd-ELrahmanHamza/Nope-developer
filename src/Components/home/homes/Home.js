import React from "react";

// Import react router dom components
import { Link } from "react-router-dom";

// Import images
import homeImg from "../../../Assets/images/login2.jpg";

// Import contexts
import { useAuth } from "../../../Authentication/Authentication";

/**
 * The top component in landing page
 *
 * @Component
 * @returns {React.element}
 */
const Home = () => {
  //Used for authentication
  const auth = useAuth();
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left ">
            <div className="img">
              <img src={homeImg} alt="" />
            </div>
          </div>
          <div className="right topMarign">
            <h1>Low Code-No Code</h1>
            <p>
              Low-code/no-code (LCNC) development platforms are types of visual
              software development environments that allow enterprise developers
              and citizen developers to drag and drop application components,
              connect them together and create web apps.
            </p>
            <button className="primary-btn">
              {auth.isLoggedIn() && (
                <Link
                  to={"/Dashboard"}
                  className="text-decoration-none text-white"
                >
                  Dashboard
                </Link>
              )}
              {!auth.isLoggedIn() && (
                <Link to={"/Login"} className="text-decoration-none text-white">
                  Sign in
                </Link>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

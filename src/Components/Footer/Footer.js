import React from "react";

// Import CSS
import "./Footer.css";

// Import Icons
import { BsFacebook, BsStackOverflow, BsYoutube } from "react-icons/bs";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";

// Import react router dom components
import { Link } from "react-router-dom";

/**
 * Footer component
 *
 * @Component
 * @returns {React.element}
 */
const Footer = () => {
  return (
    // Start Footer
    <footer className="footer">
      {/* Start footer Left div */}
      <div className="footer-left col-md-4 col-sm-6">
        {/* Start about */}
        <p className="about">
          <span> About the company</span> We are a full-service, global
          technology provider that partners with the world’s leading governments
          and organizations throughout their digital journeys. We’ve helped our
          clients personalize and streamline their user interactions into a
          higher quality, more insightful, and more productive experience for
          their customers, partners, employees, and management teams alike.
        </p>
        {/* End about */}

        {/* Start Icons */}
        <div className="icons">
          <a href="https://www.facebook.com/ITWORX/">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/itworxhq">
            <RiTwitterLine />
          </a>
          <a href="https://www.linkedin.com/company/itworx">
            <AiOutlineLinkedin />
          </a>
          <a href="https://www.youtube.com/c/itworx/videos">
            <BsYoutube />
          </a>
        </div>
        {/* End Icons */}
      </div>
      {/* End footer Left div */}

      {/* Start footer center div */}
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Free Zone, Area 7B, Block J</span> Nasr City, Egypt
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> +02 26736111</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="https://www.itworx.com/"> www.itworx.com</a>
          </p>
        </div>
      </div>
      {/* End footer center div */}

      {/* Start footer right div */}
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          <span>Noob</span> Developer
        </h2>

        {/* Navigation */}
        <p className="menu">
          <Link to="/Dashboard"> Dashboard</Link> | <Link to="/"> Landing</Link>{" "}
          |{" "}
          <a href="https://github.com/itworx/CodedSummer2022_LCNC_T7_Frontend">
            GitHub Repository
          </a>
        </p>

        <p className="name"> Noob Developer &copy; 2022</p>
      </div>
      {/* End footer right div */}
    </footer>
    // End Footer
  );
};

export default Footer;

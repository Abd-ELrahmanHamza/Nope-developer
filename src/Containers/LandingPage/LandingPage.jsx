// Import CSS
import "./LandingPage.css";

import React from "react";

// Import components
import Home from "../../Components/home/homes/Home";
import Branding from "../../Components/home/Branding";
import About from "../../Components/home/about/About";
import Services from "../../Components/home/services/Services";
import Wrapper from "../../Components/home/Wrapper";
import WrapperOne from "../../Components/home/WrapperOne";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

/**
 * Landing page
 *
 * @returns {React.element}
 */
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <WrapperOne />
      <Footer />
    </>
  );
};

export default LandingPage;

// Import CSS
import "./LoginSignUpContainer.css";

// Import hooks
import { useState, useRef } from "react";

// Import components
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

// Import bootstrap components
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

/**
 * LoginSignupContainer component
 *
 * @Component
 * @returns {React.Component} LoginSignUpContainer component
 */
const LoginSignUpContainer = () => {
  // defining state to make sure if logging or sign up clicked or visible or active
  const [login, setLogin] = useState(false);

  // Create reference
  const loginSignupContainerRef = useRef(null);

  // Switch between login and signup
  const handleClick = () => {
    setLogin(!login);
    loginSignupContainerRef.current.classList.toggle("active");
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="login-signup-div py-5">
        <Container className="mainContainer p-0 d-flex flex-column justify-content-center shadow rounded">
          <Button className="mobile-btn" variant="dark" onClick={handleClick}>
            {login ? "Login" : "SignUp"}
          </Button>

          <Container
            className="login-signup-container p-0"
            ref={loginSignupContainerRef}
          >
            <Login></Login>
            <div className="side-div">
              <button type="button" onClick={handleClick}>
                {login ? "Login" : "SignUp"}
              </button>
            </div>
            <SignUp toggleSign={handleClick}></SignUp>
          </Container>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginSignUpContainer;

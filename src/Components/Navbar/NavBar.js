// Import bootstrap Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import Icons
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";

// Import from react router
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Authentication/Authentication";

/**
 * NavBar Component
 *
 * @Component
 * @returns {React.Component} The navbar component
 */
const NavBar = () => {
  // To redirect after click
  const navigate = useNavigate();

  // To get the user data
  const auth = useAuth();

  // console.log(auth.user);
  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout();
    console.log("logged out");
    navigate("/Login");
  };

  /**
   * Function that handles login click
   *
   * @param {Event} event login handler
   */
  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/Login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Website Name */}
        <Link to="/" className="btn d-flex align-items-center">
          <span className="text-light">
            <AiOutlineCode size={40} />
          </span>
          <Navbar.Brand className="ms-1">Noob Developer</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {auth.isLoggedIn() && (
              <Link to="/Dashboard" className="text-decoration-none text-white">
                Dashboard
              </Link>
            )}
          </Nav>

          {/* Start dropdown */}
          <Nav>
            <Nav.Link>
              <BsFillPersonFill size={25} />
            </Nav.Link>
            {/* if user is not logged in */}
            {!auth.isLoggedIn() && (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogin}>Login</NavDropdown.Item>
              </NavDropdown>
            )}

            {/* if user is logged in */}
            {auth.isLoggedIn() && (
              <NavDropdown title={auth.user} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          {/* End dropdown */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

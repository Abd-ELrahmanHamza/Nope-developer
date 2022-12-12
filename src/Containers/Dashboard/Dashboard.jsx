// Import components
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Projects from "../../Components/Projects/Projects";

// Import CSS
import "./Dashboard.css";

/**
 * Dashboard component
 *
 * @Component
 * @returns {React.Component} Dashboard component
 */
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <NavBar />
      <Projects />
      <Footer />
    </div>
  );
};

export default Dashboard;

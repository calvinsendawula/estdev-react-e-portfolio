// import { Link } from "react-router-dom";
import ResumePDF from "../assets/Sendawula Calvin Resume.pdf";

const NavBar = () => {
    return ( 
        <div className="footer-nav-section">
            <div className="footer-nav">
                {/* <Link to="/">Home</Link>
                <Link to="/services">Services</Link> */}
                <a href="">Home</a>
                <a href="">Services</a>
                <a href={ ResumePDF } download="Sendawula Calvin Resume">My Resume</a>
            </div>
        </div>
     );
}
 
export default NavBar;
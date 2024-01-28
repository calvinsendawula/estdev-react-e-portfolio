import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="footer-nav-section">
            <div className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
            </div>
        </div>
     );
}
 
export default NavBar;
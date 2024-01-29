import ResumePDF from "../assets/Sendawula Calvin Resume.pdf";

const NavBar = () => {
    return ( 
        <div className="footer-nav-section">
            <div className="footer-nav">
                <a href={ ResumePDF } download="Sendawula Calvin Resume">Download My Resume Here</a>
            </div>
        </div>
     );
}
 
export default NavBar;
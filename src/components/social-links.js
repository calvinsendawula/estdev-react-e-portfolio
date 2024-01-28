import LinkedInIcon from '../assets/linkedin-light.png';
import GitHubIcon from '../assets/github-light.png';
import GmailIcon from '../assets/gmail-light.png';

const SocialLinks = () => {
    return ( 
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ceejay188/" target="_blank">
                <img src={ LinkedInIcon } id="linkedin-icon" alt="LinkedIn" />
            </a>
            <a href="https://github.com/calvinsendawula" target="_blank">
                <img src={ GitHubIcon } id="github-icon" alt="GitHub" />
            </a>
            <a href="mailto:calvinsendawula188@gmail.com" target="_blank">
                <img src={ GmailIcon } id="gmail-icon" alt="Email" />
            </a>
        </div>
     );
}
 
export default SocialLinks;
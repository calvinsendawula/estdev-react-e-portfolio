import ProfilePicture from '../assets/calvin_sendawula.png';

const SkillsSection = () => {
    return ( 
        <div className="skills-section">
            <div className="bio">
                <p>I&apos;m currently a 4<sup>th</sup> year student of Computer Science at Strathmore University, set to
                    graduate in 2024.</p>
                <p>I have experience in the following:</p>
                <ul>
                    <li>
                        <div id="ul-1">1</div><span>Web Development</span>
                    </li>
                    <li>
                        <div id="ul-2">2</div><span>Software Development</span>
                    </li>
                    <li>
                        <div id="ul-3">3</div><span>Database Management</span>
                    </li>
                    <li>
                        <div id="ul-4">4</div><span>Data Analysis</span>
                    </li>
                    <li>
                        <div id="ul-5">5</div><span>Artificial Intelligence</span>
                    </li>
                    <li>
                        <div id="ul-6">6</div><span>Machine Learning</span>
                    </li>
                </ul>
            </div>
            <div class="profile-picture">
                <img src={ ProfilePicture } id="profile-picture" alt="Calvin Sendawula" />
            </div>
        </div>
     );
}
 
export default SkillsSection;
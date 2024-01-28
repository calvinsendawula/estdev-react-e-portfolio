import { useState, useEffect } from "react";
import AboutList from "./subcomponents/about-list";

const About = () => {
    const [profile, setProfile] = useState([null]);

    useEffect(() => {
        fetch('http://localhost:8000/profile')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProfile(data);
            })
    }, []);

    return ( 
        <div className="about">
            {profile && <AboutList profile={profile} />}
        </div>
     );
}
 
export default About;
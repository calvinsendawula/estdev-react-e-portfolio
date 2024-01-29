import MyName from "./components/my-name";
import Greeting from "./components/greeting";
import ShortIntro from "./components/short-intro";
import SkillsSection from "./components/skills-section";
import RandomJoke from "./components/random-joke";
import SocialLinks from "./components/social-links";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="main-section">
      <MyName />
      <Greeting />
      <ShortIntro />
      <SkillsSection />
      <RandomJoke />
      <SocialLinks />
      <NavBar />
    </div>
  );
}

export default App;

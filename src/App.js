import MyName from "./components/my-name";
import Greeting from "./components/greeting";
import ShortIntro from "./components/short-intro";
import SkillsSection from "./components/skills-section";
import SocialLinks from "./components/social-links";

function App() {
  return (
    <div className="main-section">
      <MyName />
      <Greeting />
      <ShortIntro />
      <SkillsSection />
      <SocialLinks />
    </div>
  );
}

export default App;

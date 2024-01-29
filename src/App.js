import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import MyName from "./components/my-name";
import Greeting from "./components/greeting";
import ShortIntro from "./components/short-intro";
import SkillsSection from "./components/skills-section";
import RandomJoke from "./components/random-joke";
import SocialLinks from "./components/social-links";
import NavBar from "./components/navbar";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={ <Home /> } />
    //     <Route path="/services" element={ <Services /> }/>
    //   </Routes>
    // </Router>
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

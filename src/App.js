import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/services" element={ <Services /> }/>
      </Routes>
    </Router>
  );
}

export default App;

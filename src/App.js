import "./index.css";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Project";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/reactjs-portfolio" element={<Profile />} />
          <Route path="/reactjs-portfolio/skill" element={<Skill />} />
          <Route path="/reactjs-portfolio/project" element={<Project />} />
          <Route path="/reactjs-portfolio/*" element={<div>Sorry!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
          <Route path="/" element={<Profile />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Project />} />
          <Route path="*" element={<div>Sorry!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

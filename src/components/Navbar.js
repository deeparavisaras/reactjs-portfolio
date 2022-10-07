import { Link } from "react-router-dom";
import ".././index.css";

function Navbar() {
  return (
    <nav className="flex justify-between p-10 bg-teal-900 align-middle text-center sm:block sm:justify-around">
      <div className="sm:m-5">
        <a
          className="text-2xl text-slate-300 font-kalam"
          href="/reactjs-portfolio/"
        >
          developedbyDeepa
        </a>
      </div>
      <div>
        <ul className="flex gap-10 text-center sm:justify-center sm:gap-5 ">
          <li>
            <Link
              to="/reactjs-portfolio/skill"
              className="px-2 py-1 bg-cyan-700  shadow-cyan-600 shadow-sm text-white rounded"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/reactjs-portfolio/project"
              className="px-2 py-1 bg-cyan-700 shadow-cyan-600 shadow-sm text-white rounded"
            >
              Project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

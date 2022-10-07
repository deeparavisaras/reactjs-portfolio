import ".././index.css";
import Navbar from "./Navbar";
import profile from ".././assets/photo.jpg";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";
function Profile() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <img
          src={profile}
          alt="profile"
          className="rounded-full h-1/5 w-1/5 mx-auto mb-5 sm:h-1/3 sm:w-1/3"
        />
        <p className="text-4xl mb-5"> Deepa Ravi</p>
        <p className="text-xl"> Interested in Web Development</p>
        <p className=""> Pursing final year at Arunai Engineering College</p>
        <div className="flex justify-center gap-10 my-10  ">
          <a
            href="mailto:deepatheheaven@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail className="text-5xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepa-ravi-a196741b8"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-5xl cursor-pointer " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;

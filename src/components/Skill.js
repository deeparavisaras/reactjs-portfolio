import ".././index.css";
import Navbar from "./Navbar";
import typewriter from ".././assets/typewriter.png";
import java from ".././assets/java.png";
import web from ".././assets/web.png";

function Skill() {
  const skill_set = [
    {
      name: "TypeWriting",
      pic: typewriter,
      img_class: "",
      desc: "Certified as Typewriter in Tamil and English",
    },
    {
      name: "Java",
      pic: java,
      img_class: "h-32 m-auto",
      desc: "Practising and Learning for past 2 years",
    },
    {
      name: "Web Development",
      pic: web,
      img_class: "",
      desc: "Learning and Developing",
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="p-10 ">
        <p className="p-10 text-center text-3xl text-cyan-900 sm:gap-10  ">
          My Skills includes
        </p>
        <div className="flex justify-center  sm:block ">
          {skill_set.map((items, index) => (
            <div className="h-80 w-60 shadow-xl rounded-lg p-5 flex flex-col items-center overflow-hidden sm:m-auto ">
              <div className="h-40 w-40">
                <img
                  src={items.pic}
                  alt="skill_logo"
                  className={items.img_class}
                />
              </div>
              <p className="text-zinc-900 text-xl text-center">{items.name}</p>
              <p className="text-gray-600">{items.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;

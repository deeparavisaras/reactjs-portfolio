import ".././index.css";
import Navbar from "./Navbar";
const Project = () => {
  const project_set = [
    { name: "project_name", desc: ["about1", "about2", "about3"] },
    { name: "project_name", desc: ["about1", "about2", "about3"] },
  ];
  return (
    <div>
      <Navbar />
      <div className=" p-10 sm:p-5">
        <p className="text-center text-cyan-800 text-3xl pb-10">My projects</p>
        <div className="flex justify-center gap-10 sm:block ">
          {project_set.map((items, index) => (
            <div className="h-100 w-80 shadow-2xl rounded-xl p-10">
              <p className="text-xl text-center pb-5">{items.name}</p>
              <ul className="list-disc">
                {items.desc.map((values) => (
                  <li>{values}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;

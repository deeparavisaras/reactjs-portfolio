import ".././index.css";
import Navbar from "./Navbar";
const Project = () => {
  const project_set = [
    {
      name: "Smart Notice Board Using Arduino",
      desc: [
        "Notice board is necessary thing in any institution or public utility places.",
        "Arduino system's coding will be done using embedded C language.",
        "Android phone/PC is used for sending notices.",
      ],
    },
    {
      name: "Online Services for Home Appliances",
      desc: [
        "Keeping that in sense our proposed system is basically a marketplace for household services.",
        "Several aspects like painting, pest control, plumbing, electrical works and carpentry services are involved in a system.",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className=" p-10 sm:p-5 ">
        <p className="text-center text-cyan-800 text-3xl pb-10">My projects</p>
        <div className="flex justify-center gap-10 sm:block   ">
          {project_set.map((items, index) => (
            <div className="h-100 w-80 shadow-2xl rounded-xl p-10  ">
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

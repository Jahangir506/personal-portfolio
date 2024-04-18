import { Link } from "react-router-dom";
import img1 from "../../../assets/dps.png";
import img2 from "../../../assets/Qu.png";
import img3 from "../../../assets/SAVE-LIFE.png";

const Projects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl">
          <span className="text-yellow-500">My</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8 lg:grid-cols-3 justify-center">
          <div className="card card-compact">
            <div>
              <img src={img1} alt="Shoes" className="w-80 p-2 h-52" />
              <div className="flex gap-4 ml-2">
                <Link
                  target={"_blank"}
                  to="https://electronic-voting-system-beta.vercel.app/"
                >
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Live Site
                  </button>
                </Link>
                <Link target={"_blank"} to="https://github.com/dreamwarrior6m/Electronic-Voting-System">
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Source Code
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>
                  {" "}
                  ● Developed an innovative online voting platform facilitating
                  the creation of elections, addition of candidates/voters, and
                  ensuring integrity through single-vote verification,
                  bolstering trust in the electoral process.
                </p>
                <p>
                  ● Integrated advanced polling features enable users to gather
                  opinions and insights efficiently, enhancing decision-making
                  processes and participant engagement.{" "}
                </p>
                <p>
                  ● We designed robust Notification and Support systems, keeping
                  participants informed about election updates and providing
                  prompt assistance to address any queries or issues, ensuring a
                  smooth and satisfactory voting experience.
                </p>
              </div>
            </div>
          </div>
          <div className="card card-compact">
            <div>
              <img src={img2} alt="Shoes" className="w-80 p-2 h-52" />
              <div className="flex gap-4 ml-2">
                <Link target={"_blank"} to="https://job-task1-a443b.web.app/">
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Live Site
                  </button>
                </Link>
                <Link target={"_blank"} to="https://github.com/Jahangir506/job-task1-client">
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Source Code
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>● Uses boards, lists, and cards for organizing tasks.</p>
                <p>● Simple interface, easy for individuals and teams.</p>
                <p>
                  ● Helps with task management, collaboration, and deadlines.
                </p>
              </div>
            </div>
          </div>
          <div className="card card-compact">
            <div>
              <img className="w-80 p-2 h-52" src={img3} alt="Shoes" />
              <div className="flex gap-4 ml-2">
                <Link target={"_blank"} to="https://save-life-754a1.web.app/">
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Live Site
                  </button>
                </Link>
                <Link target={"_blank"} to="https://github.com/Jahangir506/save-life-client">
                  <button className="btn btn-sm text-white bg-[#02765d]">
                    Source Code
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>● Help people sign up as donors.</p>
                <p>● Enable users to find blood donation events. </p>
                <p>● Facilitate scheduling appointments for blood donation. </p>
                <p>
                  ● Allow users to request blood when needed, especially during
                  emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;

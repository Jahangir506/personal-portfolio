import { Link } from "react-router-dom";
import img1 from '../../../assets/JUSTCHOICE.png'
import img2 from '../../../assets/TONADDA.png'
import img3 from '../../../assets/SAVE-LIFE.png'

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
              <img
                src={img1}
                alt="Shoes"
                className="w-80 p-2 h-52"
              />
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae consectetur voluptatibus deserunt sed nulla consequatur!
                  Quasi itaque ratione consectetur eius nulla modi sequi, eos
                  quo ea odit doloremque architecto sint.
                </p>
                <Link target={"_blank"} to='https://brand-shop-6a8b1.web.app/'>
                  <button className="btn btn-sm text-white bg-[#02765d]">Live Site</button>
                </Link>
                <Link>
                  <button className="btn btn-sm text-white bg-[#02765d]">Source</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact">
            <div>
              <img
                src={img2}
                alt="Shoes"
                className="w-80 p-2 h-52"
              />
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae consectetur voluptatibus deserunt sed nulla consequatur!
                  Quasi itaque ratione consectetur eius nulla modi sequi, eos
                  quo ea odit doloremque architecto sint.
                </p>
                <Link target={"_blank"} to='https://tong-adda.web.app/'>
                  <button className="btn btn-sm text-white bg-[#02765d]">Live Site</button>
                </Link>
                <Link>
                  <button className="btn btn-sm text-white bg-[#02765d]">Source</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact">
            <div>
              <img
              className="w-80 p-2 h-52"
                src={img3}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <div className="card-actions">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae consectetur voluptatibus deserunt sed nulla consequatur!
                  Quasi itaque ratione consectetur eius nulla modi sequi, eos
                  quo ea odit doloremque architecto sint.
                </p>
                <Link target={"_blank"} to='https://save-life-754a1.web.app/'>
                  <button className="btn btn-sm text-white bg-[#02765d]">Live Site</button>
                </Link>
                <Link>
                  <button className="btn btn-sm text-white bg-[#02765d]">Source</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;

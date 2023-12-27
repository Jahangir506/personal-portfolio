import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/MD. JAHANGIR ALAM OF RESUME.pdf";
import "../BannerIntro/BannerIntro.css";

const BannerIntro = () => {
  const [typewriter] = useTypewriter({
    words: ["Front-end Developer.", "Junior Developer."],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
  });
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-6 w-full flex-col-reverse lg:flex-row items-center">
          <div className="flex-1 min-w-4xl px-6 lg:px-2">
            <h2 className="text-xl font-medium mb-3">Hi there,</h2>
            <div className="space-y-5 lg:space-y-10">
              <h2 className="text-4xl font-bold ">
                I Am a{" "}
                <span className="text-3xl lg:text-5xl text-extrabold text-[#34e36b] shadow-[#34e36b]">
                  {typewriter}
                </span>
                <Cursor cursorColor="#22c55e"></Cursor>
              </h2>
              <p className="max-w-lg text-sm lg:max-w-3xl text-justify">
                I started knowing and learning Programming for 9 months,
                I am honing myself in web development, specializing in React.js
                for friends development. I have some knowledge of Express.js for
                server-side development and MongoDB for working with databases.
                It allows me to tackle end-to-end development tasks, build
                scalable and web apps.
              </p>
              <div className="space-x-6">
                <Link to="/contact">
                  <button className="btn">Hire Me</button>
                </Link>
                <a href={resume} download={"resume_Md_Jahangir_Alam"}>
                  <button className="btn">Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className="blob hover:translate-y-6"></div>
        </div>
      </div>
    </>
  );
};
export default BannerIntro;

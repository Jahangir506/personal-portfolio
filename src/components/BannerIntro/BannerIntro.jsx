import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/MD. Jahangir Alam.pdf";
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
        <div className="flex justify-between gap-6 w-full items-center">
          <div className="flex-1 min-w-4xl">
            <h2 className="text-xl font-medium mb-3">Hi there,</h2>
            <div className="space-y-10">
              <h2 className="text-4xl font-bold ">
                I Am a{" "}
                <span className="text-5xl text-extrabold text-[#34e36b] shadow-[#34e36b]">
                  {typewriter}
                </span>
                <Cursor cursorColor="#22c55e"></Cursor>
              </h2>
              <p className="max-w-3xl text-justify">
                Over the past six months, I have been honing my skills in web
                development, specializing in React.js for front-end development.
                I also possess something knowledge of Express.js for server-side
                development and MongoDB for working with databases. This allows
                me to tackle end-to-end development tasks and build robust,
                scalable web applications.
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

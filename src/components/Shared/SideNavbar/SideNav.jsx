import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import HoverButton from "./HoverButton";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <>
          <div className="fixed w-full h-screen space-y-4 bg-white/90 flex flex-col justify-center items-center z-20">
            <a
              to="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <AiOutlineHome />
              <span className="pl-4">Home</span>
            </a>
            <a
              to="#work"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <GrProjects />
              <span className="pl-4">Work</span>
            </a>
            <a
              to="#projects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <AiOutlineProject />
              <span className="pl-4">Projects</span>
            </a>
            <a
              to="#resume"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <BsPerson />
              <span className="pl-4">Resume</span>
            </a>
            <a
              to="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <AiOutlineMail />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[30%] left-4 z-10">
        <div className="flex flex-col space-y-3">
         <HoverButton/>
        </div>
      </div>
    </>
  );
};
export default SideNav;

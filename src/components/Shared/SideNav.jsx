import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

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
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              to="#work"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              to="#projects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              to="#resume"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </a>
            <a
              to="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg btn cursor-pointer hover:scale-110 duration-200"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] right-4 z-10">
        <div className="flex flex-col">
          <Link to='/home' className="rounded-full shadow-lg bg-gray-100 shadow-[#5ccd80] m-2 p-4 cursor-pointer hover:scale-110 duration-200">
            <AiOutlineHome />
          </Link>
          <Link to='/study' className="rounded-full shadow-lg bg-gray-100 shadow-[#5ccd80] m-2 p-4 cursor-pointer hover:scale-110 duration-200">
            <GrProjects />
          </Link>
          <Link to='/skill' className="rounded-full shadow-lg bg-gray-100 shadow-[#5ccd80] m-2 p-4 cursor-pointer hover:scale-110 duration-200">
            <AiOutlineProject />
          </Link>
          <Link to='/projects' className="rounded-full shadow-lg bg-gray-100 shadow-[#5ccd80] m-2 p-4 cursor-pointer hover:scale-110 duration-200">
            <BsPerson />
          </Link>
          <Link to='/contact' className="rounded-full shadow-lg bg-gray-100 shadow-[#5ccd80] m-2 p-4 cursor-pointer hover:scale-110 duration-200">
            <AiOutlineMail />
          </Link>
        </div>
      </div>
    </>
  );
};
export default SideNav;

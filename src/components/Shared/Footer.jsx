import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer px-10 lg:px-80 items-center pb-4 lg:pb-16 pt-2 lg:pt-5 bg-gradient-to-r from-[#02765d] from-5% via-[#03419c] via-100% to-[#154287] to-90% text-white">
        <div className="flex">
          <Link to="/">
            <button className="btn btn-outline text-white btn-xs hover:bg-white hover:text-black">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="btn btn-outline text-white btn-xs hover:bg-white hover:text-black">
              About
            </button>
          </Link>
          <Link to="/projects">
            <button className="btn btn-outline text-white btn-xs hover:bg-white hover:text-black">
              Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline text-white btn-xs hover:bg-white hover:text-black">
              Contact
            </button>
          </Link>
        </div>
        <nav className="grid-flow-col mx-auto gap-4 md:place-self-center md:justify-self-end">
          <Link target={"_blank"} to="https://www.linkedin.com/in/md-jahangir-alam-4b5a00222/">
            <button className="btn btn-circle btn-xs outline outline-1">
              <FaLinkedin className="text-base" />
            </button>
          </Link>
          <Link target={"_blank"} to="https://twitter.com/Jahangir506">
            <button className="btn btn-circle btn-xs outline outline-1">
              <FaXTwitter className="text-base" />
            </button>
          </Link>
          <Link target={"_blank"} to="https://www.facebook.com/MD.Jahangir.Alam.JK/">
            <button className="btn btn-circle btn-xs border outline outline-1">
              <FaFacebook className="text-base" />
            </button>
          </Link>
        </nav>
      </footer>
    </>
  );
};
export default Footer;

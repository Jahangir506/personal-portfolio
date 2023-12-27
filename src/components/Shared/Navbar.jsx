import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="py-4 fixed top-0 z-50 flex right-72 items-center gap-6">
        <nav className="flex gap-4">
          <Link target={"_blank"} to="https://www.linkedin.com/in/md-jahangir-alam-4b5a00222/">
            <button className="btn btn-circle btn-xs outline outline-1">
              <FaLinkedin className="text-base"/>
            </button>
          </Link>
          <Link target={"_blank"} to="https://twitter.com/Jahangir506">
            <button className="btn btn-circle btn-xs outline outline-1">
           <FaXTwitter className="text-base"/>
            </button>
          </Link>
          <Link target={"_blank"} to='https://www.facebook.com/MD.Jahangir.Alam.JK/'>
            <button className="btn btn-circle btn-xs border outline outline-1">
              <FaFacebook className="text-base"/>
            </button>
          </Link>
        </nav>
        <h3 className="text-xl font-medium text-[#34e36b]">MD. Jahangir Alam</h3>
      </div>
    </>
  );
};
export default Navbar;

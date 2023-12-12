import { AiOutlineMail } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";

const HoverButton = ({children, text, color, ...props}) => {
  return (
    <>
      <div>
          <Link to="/">
            <IconButton text="Home">
              <FaHome size={22}/>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <IconButton text="About">
              <MdPerson size={22}></MdPerson>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/skill">
            <IconButton text="Skill">
              <FaUserGear size={22} ></FaUserGear>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <IconButton text="Projects">
              <GrProjects size={22}></GrProjects>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <IconButton text="Contact">
              <AiOutlineMail size={22}></AiOutlineMail>
            </IconButton>
          </Link>
        </div>
    </>
  );
};
export default HoverButton;

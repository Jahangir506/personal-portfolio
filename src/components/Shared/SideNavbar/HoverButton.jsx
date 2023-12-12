import { AiOutlineMail } from "react-icons/ai";
import { FaBookReader, FaHome } from "react-icons/fa";
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
              <FaHome size={20}/>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <IconButton text="About">
              <MdPerson></MdPerson>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/study">
            <IconButton text="Study">
              <FaBookReader></FaBookReader>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/skill">
            <IconButton text="Skill">
              <FaUserGear ></FaUserGear>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <IconButton text="Projects">
              <GrProjects></GrProjects>
            </IconButton>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <IconButton text="Contact">
              <AiOutlineMail></AiOutlineMail>
            </IconButton>
          </Link>
        </div>
    </>
  );
};
export default HoverButton;

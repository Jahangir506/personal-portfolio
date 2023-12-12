import { Outlet } from "react-router-dom";
import ParticleBg from "../components/Particle/ParticleBg";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import SideNav from "../components/Shared/SideNavbar/SideNav";

const MainLayouts = () => {
  return (
    <>
      <ParticleBg />
      <div className="absolute w-full top-48 bottom-48 text-white">
        <Outlet />
      </div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <SideNav/>
      <div className="relative">
        <div className="bottom-0 fixed left-0 z-200 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MainLayouts;

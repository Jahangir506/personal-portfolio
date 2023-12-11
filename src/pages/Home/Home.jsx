import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import SideNav from "../../components/Shared/SideNav";

const Home = () => {
  return (
    <>
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
export default Home;

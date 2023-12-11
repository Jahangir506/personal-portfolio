import ParticleBg from "./components/Particle/ParticleBg";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <>
    <ParticleBg/>
      <div className="bg-pink-500 h-screen">
        <Home />
      </div>
    </>
  );
};
export default App;

import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-6 w-full items-center">
        <div className="space-y-10 flex-1 min-w-4xl">
            <h2 className="text-2xl font-medium ">Hi there,</h2>
            <h2 className="text-5xl font-bold ">I Am a Front-end Developer</h2>
            <p className="max-w-3xl text-justify">
              Handful in Frontend Development. I offer you most relevant web
              designs with generous attractions so you can express and present
              yourself as an unique entity to the modern world
              Handful in Frontend Development. I offer you most relevant web
              designs with generous attractions so you can express.
            </p>
            <p>For Any Query : <span className="underline">md.jahangir.alam9649@gmail.com</span></p>
            <div className="space-x-6">
                <button className="btn">Hire Me</button>
                <button className="btn">Download Resume</button>
            </div>
          </div>
          <div className="blob hover:translate-y-6 hover:"></div>
        </div>
      </div>
    </>
  );
};
export default Banner;

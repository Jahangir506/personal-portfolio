const Projects = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl">
          <span className="text-yellow-500">My</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-16 lg:grid-cols-3 justify-center">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn bttn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;

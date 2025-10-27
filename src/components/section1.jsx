import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

function FeaturedCourses() {
  return (
    <section className="bg-white text-gray-900 py-12 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* --- Left Side: Text --- */}
        <div className="md:w-1/3 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn essential career and life skills
          </h2>
          <p className="text-lg mb-4">
            Udemy helps you build in-demand skills fast, to prepare your career
            in a changing job market.
          </p>
        </div>

        {/* --- Right Side: Cards Grid --- */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 gap-6 md:gap-12  place-items-center mx-auto">
          {/* Card 1 */}
          <div
            className="h-80 w-[200px] bg-cover bg-center flex items-end lg:w-[250px]  justify-center rounded-xl overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="relative w-full z-10 bg-white bg-opacity-80 px-4 py-3 m-3 rounded-t-md">
              <a className="border border-gray-400 rounded p-1 text-xs">
                <i className="fa fa-users"></i> 1M+
              </a>
              <p className="text-black mt-4">Generative AI</p>
              <div className="text-right">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="h-80 w-[200px] bg-cover bg-center lg:w-[250px] flex items-end justify-center rounded-xl overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="relative w-full z-10 bg-white bg-opacity-80 px-4 py-3 m-3 rounded-t-md">
              <a className="border border-gray-400 rounded p-1 text-xs">
                <i className="fa fa-users"></i> 14.4M+
              </a>
              <p className="text-black mt-4">IT Certifications</p>
              <div className="text-right">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="h-80 w-[200px] bg-cover lg:w-[250px] bg-center flex items-end justify-center rounded-xl overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="relative w-full z-10 bg-white bg-opacity-80 px-4 py-3 m-3 rounded-t-md">
              <a className="border border-gray-400 rounded p-1 text-xs">
                <i className="fa fa-users"></i> 8M+
              </a>
              <p className="text-black mt-4">Data Science</p>
              <div className="text-right">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
